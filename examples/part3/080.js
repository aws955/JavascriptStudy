const capitals = `prague,Czech Republic
Copenhagen,Denmark
Paris,France
Madrid,Spain
Rome,Italy`

capitals.split('\n').forEach(s => {
    const capitals = s.split(',')[0];
    const country = s.split(',')[1];
    console.log(`${capitals} is in ${country}`);
});