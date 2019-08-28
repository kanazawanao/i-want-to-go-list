import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  map?: google.maps.Map;
  @ViewChild('mapWrapper', {static: false}) mapElement!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.initializeMap();
  }

  initializeMap() {
    const lngLat = new google.maps.LatLng(6.5874964, 3.9886097);
    const mapOptions: google.maps.MapOptions = {
      center: lngLat,
      zoom: 16,
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: false
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
}
