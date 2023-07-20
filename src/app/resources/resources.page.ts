import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabServiceService } from '../tab-service.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.page.html',
  styleUrls: ['./resources.page.scss'],
})

export class ResourcesPage implements OnInit {

  constructor(private router: Router, private tabService: TabServiceService) {}

  ngOnInit() {
    this.allResources = this.resources;
    this.filteredResources = this.resources;
    this.tabService.setActiveTab(3);
  }

  // NAVIGATION
  home(tabNumber: number){
    this.tabService.setActiveTab(tabNumber);
    this.router.navigate(['/home'])
  }

  // ARTICLES COLLECTION
  resources: Resources[] = [
    {image: 'period',
    title: "Menstrual Cycle: Office on Women's Health",
    link: 'https://www.womenshealth.gov/menstrual-cycle/your-menstrual-cycle#:~:text=Throughout%20a%20monthly%20menstrual%20cycle,between%2024%20and%2038%20days.',
    content: 'Menstruation is a woman’s monthly bleeding, often called your “period.” When you menstruate, your body discards the monthly buildup of the lining of your uterus (womb). Menstrual blood and tissue flow from your uterus through the small opening in your cervix and pass out of your body through your vagina.'},
    {image: 'period-phase',
    title: 'Stages of Menstrual Cycle',
    link: 'https://www.healthline.com/health/womens-health/stages-of-menstrual-cycle',
    content: 'During each menstrual cycle, an egg develops and is released from the ovaries. The lining of the uterus builds up. If a pregnancy doesn’t happen, the uterine lining sheds during a menstrual period. Then the cycle starts again.'},
    {image: 'period-problems',
    title: 'Common menstrual problems and how to manage them',
    link: 'https://www.medicalnewstoday.com/articles/menstrual-problems',
    content: 'Periods do not always cause problems. But if they are consistently very heavy or painful, or if they regularly cause severe mood changes, it can significantly disrupt a person’s life. Irregular or absent periods may also cause difficulty getting pregnant.'},
    {image: 'period-myths',
    title: "8 Period Myths We Need to Set Straight",
    link: 'https://www.healthline.com/health/womens-health/period-myths',
    content: 'We get it. Details of blood can make everyone a little shy, so we thought it might be helpful to try to clear a few things up about menstruation.\n\nRemember when we got the infamous talk about sex, hair, odor, and other bodily changes that signaled puberty is coming?'},
    {image: 'period-remedies',
    title: "What Helps Menstrual Cramps: 6 Home Remedies and OTC Options to Manage Pain",
    link: 'https://www.healthline.com/health/womens-health/menstrual-cramp-remedies',
    content: 'It’s common to feel discomfort around your abdomen, lower back, and thighs when you’re menstruating.\n\nDuring your period, the muscles of your womb contract and relax to help shed built-up lining. Sometimes you’ll experience cramps, which means your muscles are at work. Some people may also experience: nausea, vomiting, headaches, and diarrhea.'},
    {image: 'period-products',
    title: "How to choose period products",
    link: 'https://www.healthline.com/health/womens-health/menstrual-cramp-remedies',
    content: 'On any given day, over 300 million people around the world are having their period. Yet the high costs of period products continue to be a problem for many. Those costs are not just financial (though period equity is a serious problem that is largely unaddressed in the US); there are also environmental, health, and safety costs to consider.'},
    {image: 'period-hygiene',
    title: "Menstrual Hygiene",
    link: 'https://www.cdc.gov/hygiene/personal-hygiene/menstrual.html',
    content: 'Good menstrual health and hygiene practices can prevent infections, reduce odors, and help you stay comfortable during your period.\n\nYou can choose many types of menstrual products to absorb or collect blood during your period, including sanitary pads, tampons, menstrual cups, menstrual discs, and period underwear.'},
    {image: 'period-questions',
    title: "Why Is My Period So Random?",
    link: 'https://www.webmd.com/women/why-is-my-period-so-random#:~:text=An%20irregular%',
    content: 'Every woman is different -- including their periods. Some happen like clockwork. Others are hit-or-miss and unpredictable. On average, a woman gets their period every 24 to 38 days. A period usually lasts about 2 to 8 days. Is your period irregular -- and if so, does it need treatment?'},
    {image: 'period-emotions',
    title: "Mood Swings: PMS and Your Emotional Health",
    link: 'https://www.everydayhealth.com/pms/mood-swings.aspx',
    content: 'Premenstrual syndrome (PMS) affects a high percentage of women of childbearing age, with many women feeling mood changes in the days before menstruation. And while menstrual symptoms like irritability, anger, and mood swings are a monthly bother for most women, severe PMS can be emotionally debilitating for some. Fortunately, treating PMS with medication and lifestyle changes can help women control mood changes and other emotional difficulties.'},
    {image: 'period-heavy',
    title: "Menorrhagia (heavy menstrual bleeding)",
    link: 'https://www.mayoclinic.org/diseases-conditions/menorrhagia/symptoms-causes/syc-20352829',
    content: "Menorrhagia is the medical term for menstrual periods with abnormally heavy or prolonged bleeding. Although heavy menstrual bleeding is a common concern, most women don't experience blood loss severe enough to be defined as menorrhagia."},
  ];

  allResources: Resources[] = [];
  filteredResources: Resources[] = [];
  searchTerm: string = '';

  search() {
    if (this.searchTerm === '') {
      this.filteredResources = this.resources;
    } else {
      const searchRegex = new RegExp(this.searchTerm, 'i');
      this.filteredResources = this.resources.filter((resource) =>
        searchRegex.test(resource.title)
      );
    }
  }
}

interface Resources{
  image: string;
  title: string;
  link: string;
  content: string;
}
