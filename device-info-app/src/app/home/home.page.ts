import { Component, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/angular/standalone';
import { DeviceInfoService } from '../services/device-info.service';

// Component decorator to define metadata for the HomePage component
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  ],
})
export class HomePage {
  // Property to hold the device information
  deviceInfo: any;

  // Modern injection using inject() function to get an instance of DeviceInfoService
  private deviceInfoService = inject(DeviceInfoService);

  constructor() {}

  // Method to get device info from the device-info service
  async getDeviceInfo() {
    try {
      // Call the service to get device information and assign it to the deviceInfo property
      this.deviceInfo = await this.deviceInfoService.getDeviceInfo();
    } catch (error) {
      // Log any errors that occur during the service call
      console.error('Error getting device info:', error);
    }
  }

  // Method to clear the device information
  clearDeviceInfo() {
    this.deviceInfo = null;
  }
}
