basic.showString("NIL")
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(70, 70)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x007fff)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x007fff)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x007fff)
        cuteBot.motors(75, 10)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x007fff)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0000)
        cuteBot.motors(10, 75)
    }
})
