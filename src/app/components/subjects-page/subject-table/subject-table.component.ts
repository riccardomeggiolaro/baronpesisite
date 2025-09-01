import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject as iSubject, SubjectFilter, SubjectsService } from 'src/app/services/subjects.service';
import { ConfirmComponent } from '../../confirm/confirm.component';
import { Subject, catchError, takeUntil, throwError } from 'rxjs';
import { EditSubjectComponent } from '../edit-subject/edit-subject.component';
import { get } from 'lodash';

@Component({
  selector: 'app-subject-table',
  templateUrl: './subject-table.component.html',
  styleUrls: ['./subject-table.component.css']
})
export class SubjectTableComponent implements OnDestroy {
  displayedColumns: string[] = ['socialReason', 'telephoneNumber', 'CFPIVA', 'actions'];
  dataSource: MatTableDataSource<iSubject>;
  filter: SubjectFilter | null | undefined;

  private destroyed$ = new Subject<void>();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(private subjectsSrv: SubjectsService,
              private dialog: MatDialog) {
      this.dataSource = new MatTableDataSource();
      this.dataSource.sortingDataAccessor = get; 
      this.dataSource.sort = this.sort;
    }

  ngOnInit(): void {
    this.subjectsSrv.subjects$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe((subjects) => {
        this.dataSource.data = subjects;
        this.dataSource._updateChangeSubscription();
      })   
    this.subjectsSrv.filters$.subscribe((value) => {
      this.filter = value;
    })
    this.subjectsSrv.actions$.subscribe(value => {
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

  delete(id: number, socialReason: string){
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: {action: `eliminare il soggetto "${socialReason}"`, text: "Il soggetto potrebbe essere associato a degli eventi o a delle carte e potrebbero non essere più associati dopo l'eliminazione."},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.subjectsSrv.delete(id)
        .pipe(
          catchError(err => throwError(err))
        )
        .subscribe()
      }
    });
  }

  edit(subject: iSubject){
    const dialogRef = this.dialog.open(EditSubjectComponent, {
      data: subject,
    });
  }
}
