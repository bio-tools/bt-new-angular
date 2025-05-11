# bt-new-angular
bio.tools Angular 12 frontend draft work. It's in no way finished, things have changed since Angular 12... but perhaps it might be a starting place to move bio.tools frontend to more up to date technologies.

## bt-angular-project/bt2
Folder with Angular 12 frontend draft work from the initial design:
- The work done is only for tools
- only GET tools from bio.tools API (read, no write tools)
- very early work
- based on designs in `initial-design` folder , see below section
- need to make CORS work so local code can read from bio.tools API, or just make it work with local(host) running instance of bio.tools
- See `bt-angular-projects/bt2/README.md` to install and run locally

## bt-angular-projects/biotools2
Folder with Angular 12 frontend draft work:
- Less of the design , more of the pages implemented
- Initially meant to work with local bio.tools backend
- See `bt-angular-projects/biotools2` to install and run locally

## initial-design
Folder with initial design:
- Contains mostly static HTML, CSS, SASS and images of the design
- Also some JavaScript / jQuery which should not be used in the Angular project
- Some old , not recommemded to use compass / Ruby files
