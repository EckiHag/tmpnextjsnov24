Github repos anlegen
https://github.com/

Ergebnsi:
…or create a new repository on the command line
echo "# tmpnextjsnov24" >> README.md
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/EckiHag/tmpnextjsnov24.git
git push -u origin main

…or push an existing repository from the command line
git remote add origin https://github.com/EckiHag/tmpnextjsnov24.git
git branch -M main
git push -u origin main

Dann gehe auf gibhup zu Deploy on vercel.
Hier: Import (des neuen Projekt, das bereits angezeigt wird)
Button Deploy clicken!
Button Continue to Dashboard clicken!
Fertig:
        Deployment
        tmpnextjsnov24-pbqohktwk-eckihags-projects.vercel.app
        Domains
        tmpnextjsnov24.vercel.app
        +2
        Status
        Ready
        Created
        1m ago by EckiHag

        EckiHag
        Source
        main
        4821dc6
        first commit

Link zum Projekt bei Vercel: https://vercel.com/eckihags-projects/tmpnextjsnov24


# Update
git add .
 git commit -m "Neue Button"
 git push -u origin main