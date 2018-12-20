import {BaseElement} from './baseElement.js';

export class DataTable extends BaseElement {
    constructor(headers,data) {
        super();
        this.headers=headers;
        this.data=data;
        
    }
    getElementString() {
        let trTags ='';
        for (let row of this.data) {
            trTags += `<tr>`;
            let tdTags = '';
            for (let property of this.headers) {
                let field = row[property.toLowerCase()];
                trTags += `<td class="mdl-data-table__cell--non-numeric">
                             ${field}
                           </td>
                          `;
            }
            trTags += '</tr>';
        }
        
        
        let thTags='';
        
        for (let h of this.headers) {
            thTags += `<th class="mdl-data-table__cell--non-numeric">${h}</th>\n`;
        }
        return `
        <table class="mdl-data-table mdl-js-data-table  mdl-shadow--2dp">
  <thead>
    <tr>
    ${thTags}
     </tr>
  </thead>
  <tbody>
    ${trTags}
  </tbody>
</table>
      
    `;
    }


}