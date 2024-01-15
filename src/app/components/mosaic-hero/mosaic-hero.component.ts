import { Component, OnInit, Input, ViewChild, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { GetHeroesResponse, Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteHeroDialogComponent } from '../delete-hero-dialog/delete-hero-dialog.component';

@Component({
  selector: 'app-mosaic-hero',
  templateUrl: './mosaic-hero.component.html',
  styleUrls: ['./mosaic-hero.component.css']
})
export class MosaicHeroComponent implements OnInit {

  @Input()
  heroList: Hero[] = [];

  @ViewChild(MatTable) table: MatTable<any> | undefined;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  displayedColumns: string[] = ['id', 'name', 'management'];
  dataSource = new MatTableDataSource<Hero>(this.heroList);

  constructor(
    private heroService: HeroService,
    public dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.getAllHeroes();
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refreshTable(changes['heroList'].currentValue);
  }

  getAllHeroes(): void {
    this.heroService.getAllHeroes().then((res: GetHeroesResponse ) => {
      this.refreshTable(res.data.heroes);
    });
  }

  deleteHero(heroId: string): void {
    this.heroService.deleteHero(heroId).then((res: GetHeroesResponse ) => {
      this.refreshTable(res.data.heroes);
    });
  }

  openDialog(heroId: string): void {
    const dialogRef = this.dialog.open(DeleteHeroDialogComponent, {
      width: '350px',
      data: "Are you sure you want to eliminate the hero with id "+heroId+" ?"
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if(result) this.deleteHero(heroId);
    });
  }

  refreshTable( heroList: Hero[]): void {
    this.dataSource.data = heroList;
    this.table?.renderRows();
  }
}
