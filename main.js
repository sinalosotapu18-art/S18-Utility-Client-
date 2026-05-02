import { world, system } from "@minecraft/server";

world.afterEvents.worldInitialize.subscribe(() => {
    console.warn("S18 Client: Scripting API Active");
});

system.runInterval(() => {
    for (const player of world.getAllPlayers()) {
        player.onScreenDisplay.setActionBar("§8[§7S18 CLIENT ACTIVE§8]");
    }
}, 20);
