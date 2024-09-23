# npm install
# npm start

for i in $(seq 1 100);
do
    echo 'Running Chrome suite iteration ' $i
    npm run cy:run:chrome

    echo 'Running Electron suite iteration ' $i
    npm run cy:run:electron

    echo 'Running Edge suite iteration ' $i
    npm run cy:run:edge
done