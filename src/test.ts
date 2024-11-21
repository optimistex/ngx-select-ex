// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting(), {
        teardown: {destroyAfterEach: false},

        /**
         * @see https://github.com/angular/angular/issues/36430#issuecomment-1117801535
         */
        errorOnUnknownProperties: true,
        errorOnUnknownElements: true,
    }
);
