import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { ProduitsService } from '../../service/produits.service';
import { UpdateProduitComponent } from '../update-produit/update-produit.component';


@Component({
  selector: 'ngx-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.scss']
})
export class ListProduitComponent implements OnInit {



  ngOnInit(): void {
  }
  settings = {
    mode: "external",
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'id',
        type: 'number',
      },
      label: {
        title: 'label',
        type: 'string',
      },
      picture: {
        title: 'picture',
        type: 'string',
      },
      description: {
        title: 'description',
        type: 'string',
      },
      prix: {
        title: 'prix',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private ps: ProduitsService,
    private windowService: NbWindowService) {
    const data = this.ps.listerProduits();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
    console.log('test');
    console.log(event.data.prix);
    this.windowService.open(UpdateProduitComponent, {
      title: `Edit Produit`,
      context: {
        title: 'This is a title passed to the dialog component',
        n : event.data.prix
      }
    });
  }

  openWindowUpdateProduit() {
    this.windowService.open(UpdateProduitComponent, { title: `Edit Produit` });
  }
}