import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesPage } from './places.page';

const routes: Routes = [
    {
      path: 'tabs',
      component: PlacesPage,
      children: [
        {
            path: 'discover', children: [
                {
                    path: '',
                    loadChildren: './discover/doscover.module#DiscoverPageModule'
                }, {
                    path: 'placeId',
                    loadChildren: './discover/place-detail.module#PlaceDetailPageModule'
                }
            ]
        }
      ], {
          path: 'offers',
          children: [
              {
                path: '',
                loadChildren: './offers/offers.module#OffersPageModule'
              }, {
                  path: 'new',
                  loadChildren: 'offers/new-offer/new-offer.module#NewOfferPageModule'
              }
          ]
      }
    }
  ];

@NgModule({
    imports: [RouterModule.forChild()],
    exports: [RouterModule]
})
export class PlacesRoutingModule {

}