import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BookType } from '../types/bookType';
import { Router, ActivatedRoute, NavigationExtras, NavigationStart } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { SectionType } from '../types/sectionType';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @ViewChild('wrapper', { static: true }) wrapper!: ElementRef;
  @Input() sections: SectionType[];

  // sections: SectionType[] = [
  //   {
  //     id: 'section1',
  //     previousSectionId: 'section3',
  //     nextSectionId: 'section2',
  //     items: [         
  //       {
  //         imageUrl: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQCoK53qihwVPLRxPEDX98nyYpGbxgi5cc0ZOM4iHQu7KQvtgNyaNM5PsgI0vy5g3rLPZdjGCFr1EggrCPXpL77p2H08jV0tNEmIfs_e8KUfvBJ6Ay5nM4UM1dl-58xA6t1swmautOM.webp',
  //         title: 'Title of the book 1',
  //         genre: 'Adventure/Action'
  //       },
  //       {
  //         imageUrl: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQCoK53qihwVPLRxPEDX98nyYpGbxgi5cc0ZOM4iHQu7KQvtgNyaNM5PsgI0vy5g3rLPZdjGCFr1EggrCPXpL77p2H08jV0tNEmIfs_e8KUfvBJ6Ay5nM4UM1dl-58xA6t1swmautOM.webp',
  //         title: 'Title of the book 1',
  //         genre: 'Adventure/Action'
  //       },
  //       {
  //         imageUrl: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQCoK53qihwVPLRxPEDX98nyYpGbxgi5cc0ZOM4iHQu7KQvtgNyaNM5PsgI0vy5g3rLPZdjGCFr1EggrCPXpL77p2H08jV0tNEmIfs_e8KUfvBJ6Ay5nM4UM1dl-58xA6t1swmautOM.webp',
  //         title: 'Title of the book 1',
  //         genre: 'Adventure/Action'
  //       },
  //       {
  //         imageUrl: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQCoK53qihwVPLRxPEDX98nyYpGbxgi5cc0ZOM4iHQu7KQvtgNyaNM5PsgI0vy5g3rLPZdjGCFr1EggrCPXpL77p2H08jV0tNEmIfs_e8KUfvBJ6Ay5nM4UM1dl-58xA6t1swmautOM.webp',
  //         title: 'Title of the book 1',
  //         genre: 'Adventure/Action'
  //       },
  //       // ULTIMA VA FI SNEAK PEAK PT RANDUL URMATOR !!
  //       {
  //         imageUrl: 'https://occ-0-1567-1123.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRvngexxF8H1-OzRWFSj6ddD-aB93tTBP9kMNz3cIVfuIfLEP1E_0saiNAwOtrM6xSOXvoiSCMsihWSkW0dq808-R7_lBnr6WHbjkKBX6I3sD0uCcS8kSPbRjEDdG8CeeVXEAEV6spQ.webp',
  //         title: 'Title of the book 1',
  //         genre: 'Adventure/Action'
  //       }
  //     ]
  //   },
  //   {
  //     id: 'section2',
  //     previousSectionId: 'section1',
  //     nextSectionId: 'section3',
  //     items: [
  //       {
  //         imageUrl: 'https://occ-0-1567-1123.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRvngexxF8H1-OzRWFSj6ddD-aB93tTBP9kMNz3cIVfuIfLEP1E_0saiNAwOtrM6xSOXvoiSCMsihWSkW0dq808-R7_lBnr6WHbjkKBX6I3sD0uCcS8kSPbRjEDdG8CeeVXEAEV6spQ.webp',
  //         title: 'Title of the book 1',
  //         genre: 'Adventure/Action'
  //       },
  //       {
  //         imageUrl: 'https://occ-0-1567-1123.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRvngexxF8H1-OzRWFSj6ddD-aB93tTBP9kMNz3cIVfuIfLEP1E_0saiNAwOtrM6xSOXvoiSCMsihWSkW0dq808-R7_lBnr6WHbjkKBX6I3sD0uCcS8kSPbRjEDdG8CeeVXEAEV6spQ.webp',
  //         title: 'Title of the book 1',
  //         genre: 'Adventure/Action'
  //       },
  //       {
  //         imageUrl: 'https://occ-0-1567-1123.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRvngexxF8H1-OzRWFSj6ddD-aB93tTBP9kMNz3cIVfuIfLEP1E_0saiNAwOtrM6xSOXvoiSCMsihWSkW0dq808-R7_lBnr6WHbjkKBX6I3sD0uCcS8kSPbRjEDdG8CeeVXEAEV6spQ.webp',
  //         title: 'Title of the book 1',
  //         genre: 'Adventure/Action'
  //       },
  //       {
  //         imageUrl: 'https://occ-0-1567-1123.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRvngexxF8H1-OzRWFSj6ddD-aB93tTBP9kMNz3cIVfuIfLEP1E_0saiNAwOtrM6xSOXvoiSCMsihWSkW0dq808-R7_lBnr6WHbjkKBX6I3sD0uCcS8kSPbRjEDdG8CeeVXEAEV6spQ.webp',
  //         title: 'Title of the book 1',
  //         genre: 'Adventure/Action'
  //       },
  //       {
  //         imageUrl: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZEK-7pZ1H5FD4cTyUb9qB_KeyJGz5p-kfPhCFv4GU_3mbdm8Xfsy4IBchlG9PFNdGff8cBNPaeMra72VFnot41nt0y3e8RLgaVwwh3UvyM2H2_MkmadWbQUeGuf811K7-cxJJh7gA.jpg',
  //         title: 'Title of the book 1',
  //         genre: 'Adventure/Action'
  //       }
  //     ]
  //   },
  //   {
  //     id: 'section3',
  //     previousSectionId: 'section2',
  //     nextSectionId: 'section1',
  //     items: [
  //       {
  //         imageUrl: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZEK-7pZ1H5FD4cTyUb9qB_KeyJGz5p-kfPhCFv4GU_3mbdm8Xfsy4IBchlG9PFNdGff8cBNPaeMra72VFnot41nt0y3e8RLgaVwwh3UvyM2H2_MkmadWbQUeGuf811K7-cxJJh7gA.jpg',
  //         title: 'Title of the book 2',
  //         genre: 'Adventure/Action'
  //       },
  //       {
  //         imageUrl: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZEK-7pZ1H5FD4cTyUb9qB_KeyJGz5p-kfPhCFv4GU_3mbdm8Xfsy4IBchlG9PFNdGff8cBNPaeMra72VFnot41nt0y3e8RLgaVwwh3UvyM2H2_MkmadWbQUeGuf811K7-cxJJh7gA.jpg',
  //         title: 'Title of the book 2',
  //         genre: 'Adventure/Action'
  //       },
  //       {
  //         imageUrl: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZEK-7pZ1H5FD4cTyUb9qB_KeyJGz5p-kfPhCFv4GU_3mbdm8Xfsy4IBchlG9PFNdGff8cBNPaeMra72VFnot41nt0y3e8RLgaVwwh3UvyM2H2_MkmadWbQUeGuf811K7-cxJJh7gA.jpg',
  //         title: 'Title of the book 2',
  //         genre: 'Adventure/Action'
  //       },
  //       {
  //         imageUrl: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZEK-7pZ1H5FD4cTyUb9qB_KeyJGz5p-kfPhCFv4GU_3mbdm8Xfsy4IBchlG9PFNdGff8cBNPaeMra72VFnot41nt0y3e8RLgaVwwh3UvyM2H2_MkmadWbQUeGuf811K7-cxJJh7gA.jpg',
  //         title: 'Title of the book 2',
  //         genre: 'Adventure/Action'
  //       },
  //       {
  //         imageUrl: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQCoK53qihwVPLRxPEDX98nyYpGbxgi5cc0ZOM4iHQu7KQvtgNyaNM5PsgI0vy5g3rLPZdjGCFr1EggrCPXpL77p2H08jV0tNEmIfs_e8KUfvBJ6Ay5nM4UM1dl-58xA6t1swmautOM.webp',
  //         title: 'Title of the book 2',
  //         genre: 'Adventure/Action'
  //       }
  //     ]
  //   }
  // ];
  activeSectionIndex: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.observeRouteChanges();
  }
  
  next(): void {
    let reset = false;
    if ( this.activeSectionIndex < this.sections.length - 1 ) {
      this.activeSectionIndex++;
    } else {
      this.activeSectionIndex = 0;
      reset = true;
    }

    const scrollAmount = this.wrapper?.nativeElement.offsetWidth;
    if (scrollAmount && !reset) {
      this.wrapper.nativeElement.scrollTo({
        left: this.wrapper.nativeElement.scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    } else if ( scrollAmount && reset ) {
      this.wrapper.nativeElement.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  previous(): void {
    let reset = false;
    if ( this.activeSectionIndex > 0 ) {
      this.activeSectionIndex--;
    } 

    const scrollAmount = this.wrapper?.nativeElement.offsetWidth;
    if (scrollAmount && !reset) {
      this.wrapper.nativeElement.scrollTo({
        left: this.wrapper.nativeElement.scrollLeft - scrollAmount,
        behavior: 'smooth'
      });
    }
  }
  

  getTranslateValue(): string {
    const itemWidth = 100 / this.sections.length;
    const translateX = -1 * itemWidth * 0;
    console.log(translateX)
    return `translateX(${translateX}%)`;
  }
}
