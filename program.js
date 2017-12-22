process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        } else if (instruction === '/info') {
            process.stdout.write('Language: '+ process.env.lang);
            process.stdout.write(', Version: ' + process.versions.node);  
        } else {
        process.stderr.write('Wrong instruction!\n');
        }
}
})