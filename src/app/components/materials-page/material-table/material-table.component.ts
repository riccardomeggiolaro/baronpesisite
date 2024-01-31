import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { get } from 'lodash';
import { Subject, catchError, takeUntil, throwError } from 'rxjs';
import { MaterialFilter, MaterialsService, Material as iMaterial } from 'src/app/services/materials.service';
import { ConfirmComponent } from '../../dialogs/confirm/confirm.component';
import { EditMaterialComponent } from '../edit-material/edit-material.component';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent {
  displayedColumns: string[] = ['description', 'actions'];
  dataSource: MatTableDataSource<iMaterial>;
  filter: MaterialFilter | null | undefined;

  private destroyed$ = new Subject<void>();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(private materialsSrv: MaterialsService,
              private dialog: MatDialog) {
      this.dataSource = new MatTableDataSource();
      this.dataSource.sortingDataAccessor = get; 
      this.dataSource.sort = this.sort;
    }

  ngOnInit(): void {
    this.materialsSrv.materials$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe((subjects) => {
        this.dataSource.data = subjects;
        this.dataSource._updateChangeSubscription();
      })   
    this.materialsSrv.filters$.subscribe((value) => {
      this.filter = value;
    })
    this.materialsSrv.actions$.subscribe(value => {
      if(this.paginator){
        if(value === "filter") this.paginator!.firstPage();
        if(value === "add") this.paginator!.lastPage();
      }
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  delete(id: number, description: string){
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: {action: `eliminare il materiale "${description}"`},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.materialsSrv.delete(id)
        .pipe(
          catchError(err => throwError(err))
        )
        .subscribe()
      }
    });
  }

  edit(material: iMaterial){
    const dialogRef = this.dialog.open(EditMaterialComponent, {
      data: material,
    });
  }
}
