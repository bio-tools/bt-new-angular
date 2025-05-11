import { Component, OnInit, Renderer2, ViewChildren, QueryList, ElementRef, HostListener, Input } from '@angular/core';
import { HeaderMenuService } from './header-menu.service';

/**
 * Header component logic.
 * Most of the code is for handling HTML/CSS classes used for transitions and menu navigation
 * Most (if not all) class member variables are used as switches for HTML/CSS class attributes
 */

@Component({
  selector: 'app-bt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [HeaderMenuService]
})
export class HeaderComponent implements OnInit {
  @Input() home: string|boolean;
  constructor(private renderer: Renderer2, private menuService: HeaderMenuService) {
    this.home = false;
  }

  // readonly constants
  readonly FADE_OUT = 'fade-out';
  readonly NO_SCROLL = 'no-scroll';
  readonly FADE_IN = 'fade-in';
  readonly SLIDE_IN = 'slide-in';
  readonly ACTIVE = 'active';
  readonly NONE = '';

  // primary <li> elements from menu
  @ViewChildren('primaryEl') primaryEl: QueryList<ElementRef>;

  // String variables initialized with empty string denote "in-out" class switches
  // like fade-in <=> fade-out or slide-in <=> slide-out for different elements
  // in the HTML part there will be an [ngClass]=variable reference to them
  overlayFade = this.NONE;
  innerSlide = this.NONE;
  mtFade = this.NONE;
  primaryMenuFadeToggle = this.NONE;

  // Boolean variables initialized with false denote "active", "display" class switches
  // which either have or don't have these classes
  // in the HTML part there will be a [class.active]=variable, [class.display]=variable reference to them
  overlayDisplay = false;
  navigationDisplay = false;
  loginDisplay = false;
  registerDisplay = false;
  isStickyMenu = false;
  prevButtonDisplay = false;
  mtHide = false;


  /**
   * Listen for scrollTop position and show/hide sticky menu
   */
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // we use Max of different values because of browser compatibility issues
    const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    if (scrollTop > 850) {
      this.isStickyMenu = true;
    } else {
      this.isStickyMenu = false;
    }
  }

  ngOnInit() {
    this.home = (this.home === 'true' || this.home === true ? true : false);
  }

  /**
   * Open overlay common to menu, login and register
   */
  overlayOpen() {
    this.renderer.addClass(document.body, this.NO_SCROLL);
    this.overlayDisplay = true;
    setTimeout(() => {
      this.overlayFade = this.FADE_IN;
    }, 20);
    setTimeout(() => {
      this.innerSlide = this.SLIDE_IN;
    }, 250);
  }

  /**
   * Open header menu
   */
  menuOpen() {
    this.overlayOpen();
    this.navigationDisplay = true;
    // let delay = 550;

    this.addPrimaryActive(550, 100);
  }

  /**
   * Add "active" class to main menu items, with animation delay as an option
   * @param delay is used for delayed animations/transitions
   * @param increment is added to delay after each transition/animation
   */
  addPrimaryActive(delay = 0, increment = 0) {
    if (delay > 0) {
      this.primaryEl.forEach((child) => {
        setTimeout(() => {
          this.renderer.addClass(child.nativeElement, this.ACTIVE);
        }, delay += increment);
      });
    } else {
      this.primaryEl.forEach((child) => {
        this.renderer.addClass(child.nativeElement, this.ACTIVE);
      });
    }
  }

  /**
   * Remove "active" class from main menu items
   */
  removePrimaryActive() {
    this.primaryEl.forEach((child) => {
      this.renderer.removeClass(child.nativeElement, this.ACTIVE);
    });
  }


  /**
   * Close menu, login or register
   */
  menuClose() {
    this.innerSlide = this.NONE;
    this.navigationDisplay = false;
    this.loginDisplay = false;
    this.registerDisplay = false;

    this.removePrimaryActive();

    this.prevButtonDisplay = false;
    this.menuService.removeCssFromAllMenuItems();
    this.menuService.inactivateAllSubmenuItems();
    this.primaryMenuFadeToggle = this.NONE;
    this.mtFade = this.NONE;

    setTimeout(() => {
      this.overlayFade = this.NONE;
    }, 300);
    setTimeout(() => {
      this.overlayDisplay = false;
    }, 480);
    this.renderer.removeClass(document.body, this.NO_SCROLL);

  }
  /**
   * Open header login menu
   */
  loginOpen() {
    this.overlayOpen();
    this.loginDisplay = true;
  }
  /**
   * Open header register menu
   */
  registerOpen() {
    this.overlayOpen();
    this.registerDisplay = true;
  }

  /**
   * For mobile and extra button: close all menus and then open register menu
   */
  callRegisterMenu() {
    this.menuClose();
    setTimeout(() => {
      this.registerOpen();
    }, 500);
  }
  /**
   * For mobile and extra button: close all menus and then open login menu
   */
  callLoginMenu() {
    this.menuClose();
    setTimeout(() => {
      this.loginOpen();
    }, 500);
  }

  /**
   * returns the main menuItems
   */
  getMenuItems() {
    return this.menuService.getMenuItems();
  }

  /**
   * returns the submenu items of a given menu item id
   * @param itemId is the menu item id
   */
  getSubMenuItems(itemId) {
    return this.menuService.getSubMenuItems(itemId);
  }

  /**
   * Shows submenu items for a main-menu items one by one using a delay
   * @param itemId is the main menu item for which we activate the submenu items
   */
  setSubMenuActive(itemId: string) {
    const subMenuItemsNo = this.menuService.getSubMenuItems(itemId).length;
    let delay = 100;

    for (let j = 0; j < subMenuItemsNo; j++) {
      setTimeout(() => {
        this.menuService.setSubMenuActive(itemId, j);
      }, delay += 200);
    }
  }

  /**
   * Display header submenu
   */
  displaySubmenu(itemId) {
    this.removePrimaryActive();
    this.prevButtonDisplay = true;
    this.mtFade = this.FADE_OUT;
    this.primaryMenuFadeToggle = this.FADE_OUT;
    setTimeout(() => {
      this.mtHide = true;
    }, 200);

    this.menuService.changeMenuItemClass(itemId, this.FADE_IN);
    this.setSubMenuActive(itemId);
  }
  /**
   * Go back to previous (main) menu from submenu
   */
  previousMenu() {
    this.prevButtonDisplay = false;
    this.mtHide = false;
    this.menuService.removeCssFromAllMenuItems();
    this.menuService.inactivateAllSubmenuItems();
    this.mtFade = this.NONE;
    this.primaryMenuFadeToggle = this.NONE;
    this.addPrimaryActive(400, 200);
  }
}
