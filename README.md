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

> You can user your own loader gif or svg file

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
        private spinnersService: LoadingSpinnersService
    ) { 
        this.loaderUniqeName = 'loaderUniqeName';
    }

```

> Use `show(loaderName: String)` method to display the loading spinner.

```javascript

this.spinnersService.show(loaderUniqeName);

```

> Use `hide(loaderName: String)` method to hide the loading spinner once the processing is done.

```javascript

this.spinnersService.hide(loaderUniqeName);

```