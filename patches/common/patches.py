patches = {
    "Removes_Gravity_Suit_heat_protection": {
        0x06e37d: [0x01],
        0x0869dd: [0x01]},
    "Mother_Brain_Cutscene_Edits": {
        0x148824: [0x01,0x00],
        0x148848: [0x01,0x00],
        0x148867: [0x01,0x00],
        0x14887f: [0x01,0x00],
        0x148bdb: [0x04,0x00],
        0x14897d: [0x10,0x00],
        0x1489af: [0x10,0x00],
        0x1489e1: [0x10,0x00],
        0x148a09: [0x10,0x00],
        0x148a31: [0x10,0x00],
        0x148a63: [0x10,0x00],
        0x148a95: [0x10,0x00],
        0x148b33: [0x10,0x00],
        0x148dc6: [0xb0],
        0x148b8d: [0x12,0x00],
        0x148d74: [0x00,0x00],
        0x148d86: [0x00,0x00],
        0x148daf: [0x00,0x01],
        0x148e51: [0x01,0x00],
        0x14b93a: [0x00,0x01],
        0x148eef: [0x0a,0x00],
        0x148f0f: [0x60,0x00],
        0x14af4e: [0x0a,0x00],
        0x14af0d: [0x0a,0x00],
        0x14b00d: [0x00,0x00],
        0x14b132: [0x40,0x00],
        0x14b16d: [0x00,0x00],
        0x14b19f: [0x20,0x00],
        0x14b1b2: [0x30,0x00],
        0x14b20c: [0x03,0x00]},
    "No_Music":{
        0x278413: [0x6f]},
    "Escape_Rando_Enable_Enemies":{
        0x10F000: [0x0, 0x0]},
    "Escape_Rando_Disable_Enemies":{
        0x10F000: [0x1]},
    "Escape_Animals_Open_Brinstar": {
        0x784BD: [0x10]
    },
    "Escape_Animals_Open_Norfair": {
        0x78B0B: [0x10]
    },
    "Escape_Animals_Open_Maridia": {
        0x7C54C: [0x10]
    },
    "Enable_Backup_Saves": {
        0xef20: [0x1]
    },
    'Escape_Trigger' : {
        0x10F5FE: [0x1]
    },
    'Escape_Trigger_Disable' : {
        0x10F5FE: [0x0]
    },
    # actually a bitmask:
    # high bit is for sfx play on obj completion, low bit for trigger escape
    # only in crateria (standard in rando, default in the patch) for nothing objectives.
    # we want to play sfx on objective completion only with non-standard objectives
    'Objectives_sfx' : {
        0x10F5FF: [0x81]
    },
    # see above, used in plandos so trigger escape whatever the start loc is
    # with nothing objective. With this, we'll play sfx even in plandos
    # with standard objectives, but it'll prevent to handle these patches
    # as anything else that just bytes.
    'Escape_Trigger_Nothing_Objective_Anywhere' : {
        0x10F5FF: [0x80]
    },
    # for development/quickmet: disable clear save files on 1st boot
    "Disable_Clear_Save_Boot": {
        0x7E39: [0x4c, 0x7c, 0xfe]
    },
    # vanilla data to restore setup asm for plandos
    "Escape_Animals_Disable": {
        0x79867: [0xb2, 0x91],
        0x798dc: [0xbb, 0x91]
    },
    # with animals suprise make the bomb blocks at alcatraz disapear with event "Zebes timebomb set" instead of "critters escaped"
    "Escape_Animals_Change_Event": {
        0x023B0A: [0x0E]
    },
    "LN_Chozo_SpaceJump_Check_Disable": {
        0x2518f: [0xea, 0xea, 0xea, 0xea, 0xea, 0xea, 0xea, 0xea]
    },
    "LN_PB_Heat_Disable": {
        0x18878: [0x80, 0x00]
    },
    "LN_Firefleas_Remove_Fune": {
        0x10ABC2: [0xff, 0x7f, 0xff, 0x7f],
    },
    "WS_Main_Open_Grey": {
        0x10BE92: [0x0]
    },
    "WS_Save_Active": {
        0x7ceb0: [0xC9]
    },
    "WS_Etank": {
        0x7cc4d: [0x37, 0xc3],
        0x7cbfb: [0x23, 0xc3]
    },
    "Phantoon_Eye_Door":{
        0x7CCAF: [0x91, 0xC2]
    },
    # has to be applied along with WS_Main_Open_Grey
    "Sponge_Bath_Blinking_Door": {
        0x7C276: [0x0C],
        0x10CE69: [0x00]
    },
    "Infinite_Space_Jump": {
        0x82493: [0x80, 0x0D]
    },
    "SpriteSomething_Disable_Spin_Attack": {
        0xD93FE: [0x0, 0x0]
    },
    "Ship_Takeoff_Disable_Hide_Samus": {
        0x112B13: [0x6B]
    },
    # Climb always in "zebes asleep" state, except during escape
    # (for escape peek in Crateria-less minimizer with disabled Tourian)
    'Climb_Asleep': {
        # replace "zebes awake" event ID with an unused event
        0x796CC: [0x7F],
        # put "Statues Hall" tension music
        0x796D6: [0x04]
    },
    # cancels the gamestate change by new_game.asm
    "Restore_Intro": {
        0x16EDA: [0x1E]
    }
}

additional_PLMs = {}
