def on_button_pressed_a():
    basic.show_number(sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.CENTIMETERS))
input.on_button_pressed(Button.A, on_button_pressed_a)
