// this = the object that is executing the current func

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.stop = function() {
    console.log(this);
};

video.stop(); // {title: 'a', play: f, stop: f}



function Video(title) {
    this.title = title;  // 'this' points to an empty obj {} created after using new Video('b')
    console.log(this);
}

const v = new Video('b'); // {title: 'b'}




const video1 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this, tag);   // here, the callback function is a regular func and regular func references to the global obj 'window'. so here, 'this' isnt referencing to the video1 obj itself.
        });
    }
}

const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title , tag);   // now here, this references the current obj, 'video2'
        }, this);
    }
}

// another way
const video3 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this;
        this.tags.forEach(function(tag) {
            console.log(self.title , tag);   // now here, this references the current obj, 'video2'
        });
    }
}

// another way
const video4 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title , tag);   // now here, this references the current obj, 'video2'
        }.bind(this));
    }
}

video4.showTags();

// better way: arrow funcs inherit the 'this' value
const video5 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title , tag);   // now here, this references the current obj, 'video2'
        });
    }
}