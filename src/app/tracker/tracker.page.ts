import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.page.html',
  styleUrls: ['./tracker.page.scss'],
})
export class TrackerPage implements OnInit {

  constructor(
    private router:Router,
    private alertController: AlertController,
    private toastController: ToastController) {}

  // VARIABLE DECLARATIONS
  waterCount: number = 0;
  weightInput: number = 0;
  weight: number = 0;

  ngOnInit() {
  }

  // NAVIGATIONS
  goToTracker() {
    this.router.navigate(['/tracker'])
  }
  goHome (){
    this.router.navigate(['/home'])
  }
  goToSettings (){
    this.router.navigate(['/settings'])
  }
  goToReminders (){
    this.router.navigate(['/reminders'])
  }

  // SYMPTOMS CHIP COLLECTION
  group1Chips: Chip[] = [
    { id: 1, label: 'Calm', avatar: 'Calm', selected: false },
    { id: 2, label: 'Happy', avatar: 'Happy', selected: false },
    { id: 3, label: 'Energetic', avatar: 'Energetic', selected: false },
    { id: 4, label: 'Low Energy', avatar: 'Lowenergy', selected: false },
    { id: 5, label: 'Irritated', avatar: 'Irritated', selected: false },
    { id: 6, label: 'Mood swings', avatar: 'Moodswings', selected: false },
    { id: 7, label: 'Sad', avatar: 'Sad', selected: false },
    { id: 8, label: 'Depressed', avatar: 'Depressed', selected: false },
    { id: 9, label: 'Self-critical', avatar: 'Self-critical', selected: false },
    { id: 10, label: 'Apathetic', avatar: 'Apathetic', selected: false }
  ];

  group2Chips: Chip[] = [
    { id: 1, label: 'Everything is fine', avatar: 'Fine', selected: false },
    { id: 2, label: 'Cramps', avatar: 'Cramps', selected: false },
    { id: 3, label: 'Tender breasts', avatar: 'Cherry', selected: false },
    { id: 4, label: 'Headache', avatar: 'Headache', selected: false },
    { id: 5, label: 'Acne', avatar: 'Acne', selected: false },
    { id: 6, label: 'Backache', avatar: 'Backache', selected: false },
    { id: 7, label: 'Fatigue', avatar: 'Fatigue', selected: false },
    { id: 8, label: 'Cravings', avatar: 'Cravings', selected: false },
    { id: 9, label: 'Insomia', avatar: 'Insomia', selected: false },
    { id: 10, label: 'Abdominal pain', avatar: 'Abdominal Pain', selected: false },
    { id: 11, label: 'Nausea', avatar: 'Nausea', selected: false },
    { id: 12, label: 'Bloating', avatar: 'Bloating', selected: false },
    { id: 13, label: 'Constipation', avatar: 'Constipation', selected: false },
    { id: 14, label: 'Diarrhea', avatar: 'Diarrhea', selected: false },
    { id: 15, label: 'Itching', avatar: 'Itching', selected: false }
  ];

  group3Chips: Chip[] = [
    { id: 1, label: 'No discharge', avatar: 'no-water', selected: false },
    { id: 2, label: 'Creamy', avatar: 'creamy', selected: false },
    { id: 3, label: 'Watery', avatar: 'watery', selected: false },
    { id: 4, label: 'Sticky', avatar: 'sticky', selected: false },
    { id: 5, label: 'Eggwhite', avatar: 'egg-white', selected: false },
    { id: 6, label: 'Spotting', avatar: 'spotting', selected: false },
    { id: 7, label: 'Unusual', avatar: 'unusual', selected: false },
    { id: 8, label: 'Clumpy white', avatar: 'clumpy-white', selected: false },
    { id: 9, label: 'Gray', avatar: 'gray', selected: false },
  ];

  group4Chips: Chip[] = [
    { id: 1, label: 'Travel', avatar: 'travel', selected: false },
    { id: 2, label: 'Stress', avatar: 'stress', selected: false },
    { id: 3, label: 'Meditation', avatar: 'meditation', selected: false },
    { id: 4, label: 'Journaling', avatar: 'journaling', selected: false },
    { id: 5, label: 'Exercise', avatar: 'exercise', selected: false },
    { id: 6, label: 'Yoga', avatar: 'yoga', selected: false },
    { id: 7, label: 'Disease', avatar: 'disease', selected: false },
    { id: 8, label: 'Injury', avatar: 'injury', selected: false },
    { id: 9, label: 'Alcohol', avatar: 'alcohol', selected: false },
  ];

  group5Chips: Chip[] = [
    { id: 1, label: 'Travel', avatar: 'travel', selected: false },
    { id: 2, label: 'Stress', avatar: 'stress', selected: false },
    { id: 3, label: 'Meditation', avatar: 'meditation', selected: false },
    { id: 4, label: 'Journaling', avatar: 'journaling', selected: false },
    { id: 5, label: 'Exercise', avatar: 'exercise', selected: false },
    { id: 6, label: 'Yoga', avatar: 'yoga', selected: false },
    { id: 7, label: 'Disease', avatar: 'disease', selected: false },
    { id: 8, label: 'Injury', avatar: 'injury', selected: false },
    { id: 9, label: 'Alcohol', avatar: 'alcohol', selected: false },
  ];

  // SELECT MANY CHIP
  handleClick(chip: Chip, group: string) {
    if (group === 'group1') {
      chip.selected = !chip.selected;
    } else if (group === 'group2') {
      chip.selected = !chip.selected;
    } else if (group === 'group3') {
      chip.selected = !chip.selected;
    } else if (group === 'group4') {
      chip.selected = !chip.selected;
    } else if (group === 'group4') {
      chip.selected = !chip.selected;
    }
  }

  // INCREMENT WATER INTAKE
  increaseCount() {
    this.waterCount += 150;
  }
  decreaseCount() {
    if (this.waterCount >= 150) {
      this.waterCount -= 150;
    }
  }

  // SAVE AND DELETE WEIGHT INPUT
  saveWeight() {
    if (this.weightInput) {
      this.weight = this.weightInput; }
  }
  deleteWeight() {
    this.weightInput = 0;
    this.weight = 0;
  }

  // NOTES INPUT AND ATTACH PHOTO
  notesInput: string = '';
  maxNotesLength: number = 500;
  imagePreview: string | null = null;
  maxImageSize: number = 2; // In MB

  handleImageUpload(event: any) {
    const file = event.target.files[0];
    const fileSizeMB = Math.round(file.size / 1024 / 1024);
    
    if (fileSizeMB > this.maxImageSize) {
      this.imagePreview = null;
      this.imageTooBig()
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string; };
    reader.readAsDataURL(file);
  }

  async imageTooBig() {
    const toast = await this.toastController.create({
      message: 'Image size exceeds the maximum limit.',
      duration: 2000,
      position: 'bottom',
      color: 'danger'
    });
    await toast.present();
  }

  removeImage() {
    this.imagePreview = null;
  }

  // UPDATE OR CANCEL CHANGES
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Save changes',
      message: 'Are you sure you want to update all changes?',
      buttons: [
        { text: 'No',
          handler: () => {
            this.displayToastNo(); }
        },
        { text: 'Yes',
          handler: () => {
            this.displayToastYes(); }
        }
      ]
    });
    await alert.present();
  }

  // TOAST CHANGES
  async displayToastYes() {
    const toast = await this.toastController.create({
      message: 'Changes are saved.',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }
  async displayToastNo() {
    const toast = await this.toastController.create({
      message: 'Changes are not saved.',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }

}

// FOR CHIP COLLECTION
interface Chip {
  id: number;
  label: string;
  avatar: string;
  selected: boolean;
}


