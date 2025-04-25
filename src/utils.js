const tags = ['кайфарик', 'chill guy', 'vibe кодер', 'русский', 'киберспортсмен', 'дбд про плеер (что?)', 'сосал?', 'анимешник ебаный', 'спидраннер', 'почти 4дигит в осу', 'arch linux', 'breakcore', 'vocaloid']

function getRandomTags(arr, count) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

export function generateTagsString() {
    const randomTags = getRandomTags(tags, 3);
    const resultString = `/${randomTags[0]} /${randomTags[1]} /${randomTags[2]}`;
    return resultString;
}