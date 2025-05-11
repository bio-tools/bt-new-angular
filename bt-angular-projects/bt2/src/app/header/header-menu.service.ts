import { Injectable } from '@angular/core';
@Injectable()
export class HeaderMenuService {
    private menuItems = [
        {
            id: 'documentation',
            class: 'documentation',
            text: 'Documentation',
            cssClass: '',
            submenu: [
                {
                    id: 'biotoolsdocs',
                    class: 'biotoolsdocs',
                    text: 'bio.tools docs',
                    url: 'https://biotools.readthedocs.io',
                    type: 'external',
                    active: false
                },
                {
                    id: 'stats',
                    class: 'stats',
                    text: 'bio.tools stats',
                    url: '/stats',
                    type: 'internal',
                    active: false
                },
                {
                    id: '02',
                    class: '02',
                    text: 'Sit amet',
                    url: '',
                    type: 'internal',
                    active: false
                },
                {
                    id: '03',
                    class: '03',
                    text: 'Tegus tednav',
                    url: '',
                    type: 'internal',
                    active: false
                }
            ]
        },
        {
            id: 'support',
            class: 'support',
            text: 'Support',
            cssClass: '',
            submenu: [
                {
                    id: '10',
                    class: '10',
                    text: 'Support',
                    url: '',
                    type: 'internal',
                    active: false
                },
                {
                    id: '11',
                    class: '11',
                    text: 'Lorem ipsum dolor',
                    url: '',
                    type: 'internal',
                    active: false
                },
                {
                    id: '12',
                    class: '12',
                    text: 'HelpDesk',
                    url: '',
                    type: 'internal',
                    active: false
                }
            ]
        },
        {
            id: 'github',
            class: 'github',
            text: 'GitHub',
            cssClass: '',
            submenu: [
            {
                id: '20',
                class: '20',
                text: 'bio.tools GitHub',
                url: 'https://github.com/bio-tools/biotoolsRegistry',
                type: 'external',
                active: false
            },
            {
                id: '21',
                class: '21',
                text: 'bio.tools Organisation',
                url: 'https://github.com/bio-tools',
                type: 'external',
                active: false
            },
            {
                id: '22',
                class: '22',
                text: 'biotoolsSchema',
                url: 'http://github.com/bio-tools/biotoolsSchema',
                type: 'external',
                active: false
            },
            {
                id: '23',
                class: '23',
                text: 'EDAM Ontology',
                url: 'http://github.com/edamontology/edamontology',
                type: 'external',
                active: false
            }
            ]
        }
    ];
    public getMenuItems() {
        return this.menuItems;
    }

    public getAllMainMenuIds() {
        return this.menuItems.map(obj => obj.id);
    }

    public getAllMainMenuClasses() {
        return this.menuItems.map(obj => obj.class);
    }

    public getAllMainMenuTexts() {
        return this.menuItems.map(obj => obj.text);
    }

    public getMainMenuItem(item: string) {
        return this.menuItems.find( ({id}) => id === item );
    }

    public getSubMenuItems(item: string) {
        return this.getMainMenuItem(item).submenu;
    }

    public getIndexOfMenuItem(item: string) {
        return this.menuItems.findIndex(i => i.id === item);
    }

    public changeMenuItemClass(item: string, c: string) {
        const i = this.getIndexOfMenuItem(item);
        this.menuItems[i].cssClass = c;
    }

    public getSubMenuItemTexts(item: string) {
        return this.getMainMenuItem(item).submenu.map(obj => obj.text);
    }

    public removeCssFromAllMenuItems() {
        for (const m of this.menuItems) {
            m.cssClass = '';
        }
        // Altough it works fine, Angular complains if the code is like this:
        // this.menuItems.find(m => m.cssClass = '');
    }

    public setSubMenuActive(item: string, submenuIndex: number) {
        const i = this.getIndexOfMenuItem(item);
        this.menuItems[i].submenu[submenuIndex].active = true;
    }

    public inactivateAllSubmenuItems() {
        for (const m of this.menuItems) {
            for (const s of m.submenu) {
                s.active = false;
            }
        }
        // Altough it works fine, Angular complains if the code is like this:
        // this.menuItems.find(m => (m.submenu.find(s => s.active = false)));
    }
}
