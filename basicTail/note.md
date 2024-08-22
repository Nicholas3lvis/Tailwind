Create a project folder
install tailwindcss using 'npm install -D tailwindcss'
create a tailwind configuration file using npx tailwindcss init
make two directories build and src
in the build directory we made a html file called index.html
in the src directory we made input.css which contains:
@tailwind base;
@tailwind components;
@tailwind utilities;
Based on this project the tailwind configuration, the content we passed './build/*.html'.
we built a tailwind input output by using 'npx tailwindcss -i ./src/input.css -o ./build/css/main.css'

PLUG-INS INSTALLED
inline fold, tailwind intellisence

to run file you can use liveserver or 'npx tailwindcss -i ./src/input.css -o ./build/css/main.css --watch'
-note: The second method depends on your project. 