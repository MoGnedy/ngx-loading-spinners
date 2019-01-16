# ngx-loading-spinners 
Angular 7 custom async loading spinner with two simple methods for your asychronous calls.

## Installation

`npm i ngx-loading-spinners`

## Usage 

> Import module to your application master module

```javascript
import { LoadingSpinnersModule } from 'ngx-loading-spinners';
```

> Make an import entry as shown below

```javascript

imports: [ LoadingSpinnersModule ]

```

> Include spinner component to your root level component.

```html

<ngx-loading-spinner [name]="loaderUniqeName"> </ngx-loading-spinner>

```

> You can use your own loader gif or svg file
-Set default spinner file.
```javascript
import { LoadingSpinnersService } from 'ngx-loading-spinners';
export class AppComponent {
  constructor(
    private _spinnersService: LoadingSpinnersService
  ) {
      _spinnersService.defaultSpinnerFilePath = '/assets/images/page-loader.gif';
  }
}
```
Or 
-Define file path for each spinner.
```html
<ngx-loading-spinner [img]='pathToYourOwnFile/fileName' [name]="loaderUniqeName"> </ngx-loading-spinner>

```

> Import `LoadingSpinnersService` to the component where you want to show the spinner.

```javascript

import { LoadingSpinnersService } from 'ngx-loading-spinners';

```

> Inject dependancy 

```javascript
    public loaderUniqeName: String;
    constructor(
        private _spinnersService: LoadingSpinnersService
    ) { 
        this.loaderUniqeName = 'loaderUniqeName';
    }

```

> Use `show(loaderName: String)` method to display the loading spinner.

```javascript

this._spinnersService.show(loaderUniqeName);

```

> Use `hide(loaderName: String)` method to hide the loading spinner once the processing is done.

```javascript

this._spinnersService.hide(loaderUniqeName);

```

> You can use Spinner Service method to generate unique name 

```javascript
    public loaderUniqeName: String;
    constructor(
        private _spinnersService: LoadingSpinnersService
    ) { 
        this.loaderUniqeName = this._spinnersService.getUniqueName();
    }
```