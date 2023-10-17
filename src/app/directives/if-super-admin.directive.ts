import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AuthService, User } from '../services/auth.service';
import { superAdmin } from 'src/utils/global';

@Directive({
  selector: '[appIfSuperAdmin]'
})
export class IfSuperAdminDirective {
  protected destroyed$ = new Subject<void>();
  private justCreated = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    protected authSrv: AuthService
  ) { }

  ngOnInit() {
    this.authSrv.currentUser$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(_ => {
        this.updateView();
      });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private updateView() {
    this.authSrv.currentUser$.subscribe(value => {
      if(!value){
        this.viewContainer.clear();
        this.justCreated = false;
      }else{
        this.set(value);
      }
    })
  }

  private set(value: User){
    if(value?.accessLevel! === superAdmin){
      if(this.justCreated === false){
        this.viewContainer.createEmbeddedView(this.templateRef); 
        this.justCreated = true;
      }
    }else{
      this.viewContainer.clear();
      this.justCreated = false;
    }
  }
}
