;;; compile with asar v1.81 (https://github.com/RPGHacker/asar/releases/tag/v1.81)

arch 65816
lorom

;;; update scroll set by door ptr
incsrc "macros.asm"

;;; Red (00): prevents the camera from being able to see certain screens, either permanently, or until a scroll PLM or a door's ASM pointer changes it to blue or green.
;;; Blue (01): Samus can explore these freely. Blue scrolls display all but the very top and bottom two rows of the current screen, which is ideal for hallways.
;;; Green (02): same as blue, except green scrolls allow the bottom two rows of the current screen to be seen. Not preferred because this causes the camera to hang lower towards the foreground instead of showing the player more of what's going on around Samus. However, doors that are in the floor must be inside of a green scroll to work.


org $8fbdd1
;;; $BDD1: Door ASM: scroll 0 = red, 4 = blue ;;;
;;; Room $A6A1, door list index 0: Door
;;; Room warehouse entrance, door leading to east tunnel
        PHP
        SEP #$20
        LDA #$00
        STA $7ECD23
        LDA #$01
        STA $7ECD27
        PLP
        RTS

org $8fe21a
;;; $E21A: Door ASM: scroll 28h,2E = green ;;;
; Room $CC6F, door list index 0: Door
;;; WS basement, door leading to WS main
        PHP
        SEP #$20
        LDA #$02
        STA $7ECD45
        STA $7ECD4B
        PLP
        RTS

org $8fe345
;;; $E345: Door ASM: scroll 0 = red, 4 = blue ;;;
; Room $CEFB, door list index 2: Door
;;; Room maridia tube, door leading to east tunnel
        PHP
        SEP #$20
        LDA #$00
        STA $7ECD23
        LDA #$01
        STA $7ECD27
        PLP
        RTS

;;; $BDAF: Door ASM: scroll 1 = blue, 2 = red ;;;
; Room $A322, door list index 4: Door
;;; Room caterpillar, door leading to red fish room
org $8fbdaf
        PHP
        SEP #$20
        LDA #$01
        STA $7ECD21
        LDA #$00
        STA $7ECD20
        PLP
        RTS

;;; for incompatible transition leading to WS basement phantoon out door
;;; add in freespace
org $8FFE71
%export(PhantoonRoomOut_DoorAsmPtr)
        PHP
        SEP #$20
        LDA #$01
        STA $7ECD20
        PLP
        RTS

warnpc $8ffe7c
