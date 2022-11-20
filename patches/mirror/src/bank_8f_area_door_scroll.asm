;;; compile with asar

arch snes.cpu
lorom

;;; update scroll set by door ptr

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