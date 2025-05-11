export class SearchTag {
    category: string;
    value: string;
    label: string;
    qs: string;

    public constructor(category: string, value: string,  qs: string = null, label: string = null,) {
        this.category = category;
        this.value = value;
        if (!label) {
            this.label = `${category}: ${value}`;
        } else {
            this.label = label;
        }

        if (!qs) {
            this.qs = this.category;
        } else {
            this.qs = qs;
        }
    }
}
