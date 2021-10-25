const statusTimeRotation = 15000; 

module.exports = {
    name: 'ready',
    once: true,
    execute(client, Discord){
        taskStatus(client);
    },
};

let currentStatus = 0;

async function taskStatus(client) {
	let statusMessage = "";
    let statusParams = "";
	switch (currentStatus) {
		default:
			currentStatus = 0;
		case 0:
			statusMessage = 'la GOTV 😴';
            statusParams = { type : 'WATCHING'};
			break;
		case 1:
			statusMessage = 'Yevent 2021';
            statusParams = { type : 'COMPETING'};
			break;
		case 2:
			statusMessage = 'vos idées ✨';
            statusParams = { type : 'LISTENING'};
			break;
		case 3:
			statusMessage = 'vos suggestions 👀';
            statusParams = { type : 'WATCHING'};
			break;
		case 4:
			statusMessage = 'jeu d\'acteur en Français';
            statusParams = { type : 'PLAYING'};
			break;
		case 5:
			statusMessage = 'les ordres 👮‍♂️';
            statusParams = { type : 'LISTENING'};
			break;
		case 6:
			statusMessage = 'se déguiser 🎃';
            statusParams = { type : 'PLAYING'};
			break;
		case 7:
			statusMessage = 'Event Halloween';
            statusParams = { type : 'COMPETING'};
	};
    
	client.user.setActivity(statusMessage, statusParams);

	currentStatus++;

    setTimeout(() => {
        taskStatus(client);
    }, statusTimeRotation);
}
