# ngx-loading-spinner 
Angular 7 custom async loading spinner with two simple methods for your asychronous calls.

## Installation

`npm i ngx-loading-spinners`

## Usage 

> Import module to your application master module

```javascript
import { LoadingSpinnerModule } from 'ngx-loading-spinner';
```

> Make an import entry as shown below

```javascript

imports: [ LoadingSpinnerModule ]

```

> Include spinner component to your root level component.

```html

<ngx-loading-spinner [name]="loaderUniqeName"> </ngx-loading-spinner>

```

> You can user your own loader gif or svg file

```html

<ngx-loading-spinner [img]='pathToYourOwnFile/fileName' [name]="loaderUniqeName"> </ngx-loading-spinner>

```

> Import `LoadingSpinnerService` to the component where you want to show the spinner.

```javascript

import { LoadingSpinnerService } from 'ngx-loading-spinner';

```

> Inject dependancy 

```javascript
    public loaderUniqeName: String;
    constructor(
        private spinnerService: LoadingSpinnerService
    ) { 
        this.loaderUniqeName = 'loaderUniqeName';
    }

```

> Use `show(loaderName: String)` method to display the loading spinner.

```javascript

this.spinnerService.show(loaderUniqeName);

```

> Use `hide(loaderName: String)` method to hide the loading spinner once the processing is done.

```javascript

this.spinnerService.hide(loaderUniqeName);

```