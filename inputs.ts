enum Choice{
    //%block="undefined"
    undefined,
    //%block="NaN"
    NaN,
    //%block="null"
    null,
}
/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */
//% group=["advanced"]
//% color="#E792FF" weight=50
namespace Inputs {
    //% block="$on"
    //% on.shadow="toggleOnOff"
    //% subcategory=Logic
    export function onOff(on: boolean): boolean {
        return on;
    }

    //% block="$x"
    //% x.defl=42
    //% subcategory=Math
    //% color="#ffffff" colorSecondary="#ffffff" colorTertiary="#D83B01"
    export function foo(x: number) {
        return x; 
    }

    //% block="$turnRatio"
    //% turnRatio.min=-200 turnRatio.max=200
    //% turnRatio.shadow=turnRatioPicker
    //% group=advanced
    //% subcategory=Math
    //% color="#ffffff" colorSecondary="#ffffff" colorTertiary="#D83B01"
    export function bar(turnRatio: number) {
        return turnRatio;
    
    }

    //% block="$myParam"
    //% subcategory=Arrays
    export function foo2(myParam: number[]) {
        return myParam;
    }
    
    //% block="$myParam2"
    //% subcategory=Arrays
    export function bar2(myParam2: string[]) {
        return myParam2;
    }

    //% block="$myParamm"
    //% myParamm.shadow="lists_create_with"
    //% myParamm.defl="screen_image_picker"
    //% subcategory=Arrays
    export function bar4(myParamm: Image[]) {
        return myParamm;
    }

    //% block="$myParam3"
    //% myParam3.shadow="lists_create_with"
    //% subcategory=Arrays
    export function bar6(myParam2: boolean[]) {
        return myParam2;
    }

    //% blockId=device_note block="$note"
    //% shim=TD_ID
    //% color="#ffffff" colorSecondary="#ffffff" colorTertiary="#D83B01"
    //% note.fieldEditor="note" note.defl="262"
    //% note.fieldOptions.decompileLiterals=true
    //% useEnumVal=1
    //% group="advanced"
    //% subcategory=Math
    export function noteFrequency(note: Note): number {
        return note;

    }

    //% block
    //% subcategory=Logic
    export function True(): boolean {
        return true;
    }

    //% block
    //% subcategory=Logic
    export function False(): boolean {
        return false;
    }
    //% block="null"
    //% color="#9A9FA9" colorSecondary="#777C85" colorTertiary="#52565D"
    //% subcategory=Math
    //% group="advanced"
    export function foo4(): number {
        return null;
    }

    //% block="$x"
    //% x.min=-100 x.max=100
    //% subcategory=Math
    //% color="#ffffff" colorSecondary="#ffffff" colorTertiary="#D83B01"
    export function foo5(x: number) {
        return x;
    }
    //% block="$angle"
    //% angle.shadow="protractorPicker"
    //% color="#ffffff" colorSecondary="#ffffff" colorTertiary="#D83B01"
    //% subcategory=Math
    //% group="advanced"
    export function turn(angle: number) {
        return angle;
    }
    //% block="$speed"
    //% speed.shadow="speedPicker"
    //% color="#ffffff" colorSecondary="#ffffff" colorTertiary="#D83B01"
    //% subcategory=Math
    //% group="advanced"
    export function run(speed: number) {
        return speed;
    }
    //% block="$choice"
    //% color="#9A9FA9" colorSecondary="#777C85" colorTertiary="#52565D"
    //% subcategory=Math
    //% group="advanced"
    export function foo6(choice: Choice): number {
        return choice;
    }
    //% block="NaN"
    //% color="#9A9FA9" colorSecondary="#777C85" colorTertiary="#52565D"
    //% subcategory="Math"
    //% group="advanced"
    export function bar1(): number {
        return NaN;
    }
    
    //% inlineInputMode=inline
    //% block="inline block"
    //% group="advanced"
    //% color=#DFC57B
    //% subcategory=Logic
    export function onEvent(handler: () => void) {
        return handler;
    }
}

//% color="#7DDA58" colorSecondary="#62AD45" colorTertiary="#41752C"
//% icon="\uf162"
//% blockGap=8
namespace Numbered_inputs{
    //% block
    //% subcategory=0-to-9
    //% weight=100
    export function one() {
        return 1;
    }

    //% block
    //% subcategory=0-to-9
    //% weight=99
    export function two() {
        return 2;
    }

    //% block
    //% subcategory=0-to-9
    //% weight=98
    export function three() {
        return 3;
    }

    //% block
    //% subcategory=0-to-9
    //% weight=97
    export function four() {
        return 4;
    }

    //% block
    //% subcategory=0-to-9
    //% weight=96
    export function five() {
        return 5;
    }

    //% block
    //% subcategory=0-to-9
    //% weight=95
    export function six() {
        return 6;
    }

    //% block
    //% subcategory=0-to-9
    //% weight=94
    export function seven() {
        return 7;
    }

    //% block
    //% subcategory=0-to-9
    //% weight=93
    export function eight() {
        return 8;
    }

    //% block
    //% subcategory=0-to-9
    //% weight=92
    export function nine() {
        return 9;
    }

    //% block
    //% subcategory=0-to-9
    //% weight=91
    export function zero() {
        return 0;
    }

    //% block="$zeroto9 ones"
    //% subcategory=0-to-9
    //% weight=90.5
    //% zeroto9.min=0 zeroto9.max=9
    export function foo(zeroto9: number) {
        return zeroto9;
    }

    //% block
    //% subcategory=10s
    //% weight=90
    export function ten() {
        return 10;
    }
    //% block="$tento90 tens"
    //% subcategory=10s
    //% weight=89
    //% tento90.min=1 tento90.max=9
    export function bar(tento90: number) {
        return tento90 * 10;
    }

    //% block="$multiplier hundreds"
    //% subcategory=100-to-decillion
    //% weight=88
    export function hundred(multiplier: number) {
        return multiplier * 100;
    }

    //% block="$multiplier thousand"
    //% subcategory=100-to-decillion
    //% weight=87
    export function thousand(multiplier: number) {
        return multiplier * 1000;
    }

    //% block="$multiplier million"
    //% subcategory=100-to-decillion
    //% weight=86
    export function million(multiplier: number) {
        return multiplier * 1000000;
    }

    //% block="$multiplier billion"
    //% subcategory=100-to-decillion
    //% weight=85
    export function billion(multiplier: number) {
        return multiplier * 1000000000;
    }

    //% block="$multiplier trillion"
    //% subcategory=100-to-decillion
    //% weight=84
    export function trillion(multiplier: number) {
        return multiplier * 1000000000000;
    }

    //% block="$multiplier quadrillion"
    //% subcategory=100-to-decillion
    //% weight=83
    export function quadrillion(multiplier: number) {
        return multiplier * 1000000000000000;
    }

    //% block="$multiplier quintillion"
    //% subcategory=100-to-decillion
    //% weight=82
    export function quintillion(multiplier: number) {
        return multiplier * 1000000000000000000;
    }

    //% block="$multiplier sextillion"
    //% subcategory=100-to-decillion
    //% weight=81
    export function sextillion(multiplier: number) {
        return multiplier * 1000000000000000000000;
    }

    //% block="$multiplier septillion"
    //% subcategory=100-to-decillion
    //% weight=80
    export function septillion(multiplier: number) {
        return multiplier * 1000000000000000000000000;
    }
    //% block="$multiplier octillion"
    //% subcategory=100-to-decillion
    //% weight=79
    export function octillion(multiplier: number) {
        return multiplier * 1000000000000000000000000000;
    }
    //% block="$multiplier nonillion"
    //% subcategory=100-to-decillion
    //% weight=78
    export function nonillion(multiplier: number) {
        return multiplier * 1000000000000000000000000000000;
    }
    //% block="$multiplier decillion"
    //% subcategory=100-to-decillion
    //% weight=77
    export function decillion(multiplier: number) {
        return multiplier * 1000000000000000000000000000000000;
    }
}

//% color=#900603
//% icon="\uf00d"
namespace Roman_Numerals {
    enum Numeral {
        I = 1,
        V = 5,
        X = 10,
        L = 50,
        C = 100,
        D = 500,
        M = 1000,
        MlI = 1000,
        MlV = 5000,
        MlX = 10000,
        MlL = 50000,
        MlC = 100000,
        MlD = 500000,
        MlM = 1000000,
    }

    //% block="I" weight=99
    //% blockId="romanNumeralI"
    export function rnI(): number {
        return Numeral.I;
    }

    //% block="V" weight=95
    //% blockId="romanNumeralV"
    export function rnV(): number {
        return Numeral.V;
    }

    //% block="X" weight=90
    //% blockId="romanNumeralX"
    export function rnX(): number {
        return Numeral.X;
    }

    //% block="L" weight=50
    //% blockId="romanNumeralL"
    export function rnL(): number {
        return Numeral.L;
    }

    //% block="C" weight=40
    //% blockId="romanNumeralC"
    export function rnC(): number {
        return Numeral.C;
    }

    //% block="D" weight=30
    //% blockId="romanNumeralD"
    export function rnD(): number {
        return Numeral.D;
    }

    //% block="M" weight=20
    //% blockId="romanNumeralM"
    export function rnM(): number {
        return Numeral.M;
    }

    //% block="MlI" weight=19
    //% blockId="romanNumeralMlI"
    export function rnMlI(): number {
        return Numeral.MlI;
    }

    //% block="MlV" weight=18
    //% blockId="romanNumeralMlV"
    export function rnMlV(): number {
        return Numeral.MlV;
    }

    //% block="MlX" weight=17
    //% blockId="romanNumeralMlI"
    export function rnMlX(): number {
        return Numeral.MlX;
    }

    //% block="MlL" weight=16
    //% blockId="romanNumeralMlL"
    export function rnMlL(): number {
        return Numeral.MlL;
    }

    //% block="MlC" weight=15
    //% blockId="romanNumeralMlC"
    export function rnMlC(): number {
        return Numeral.MlC;
    }

    //% block="MlD" weight=14
    //% blockId="romanNumeralMlD"
    export function rnMlD(): number {
        return Numeral.MlD;
    }
    //% block="MlM" weight=13
    //% blockId="romanNumeralMlM"
    export function rnMlM(): number {
        return Numeral.MlM;
    }
    //% weight=0
    //% blockId="romanNumeralConcat"
    //% inlineInputMode="inline"
    //% block="$a|$b||$c|$d|$e|$f|$g|$h|$i|$j"
    //% a.shadow="romanNumeralI"
    //% b.shadow="romanNumeralI"
    //% c.shadow="romanNumeralI"
    //% d.shadow="romanNumeralI"
    //% e.shadow="romanNumeralI"
    //% f.shadow="romanNumeralI"
    //% g.shadow="romanNumeralI"
    //% h.shadow="romanNumeralI"
    //% i.shadow="romanNumeralI"
    //% j.shadow="romanNumeralI"
    export function build(
        a: number,
        b?: number,
        c?: number,
        d?: number,
        e?: number,
        f?: number,
        g?: number,
        h?: number,
        i?: number,
        j?: number
    ) {
        const params = [a, b, c, d, e, f, g, h, i, j]
            .filter(el => {
                switch (el) {
                    case 1:
                    case 5:
                    case 10:
                    case 50:
                    case 100:
                    case 500:
                    case 1000:
                        return true;
                    default: return false;
                }
            });

        let acc = a;
        // don't bother error checking for this dumb joke
        for (let index = 1; index < params.length; index++) {
            const pre = params[index - 1];
            const curr = params[index];
            if (curr <= pre) {
                acc += curr;
            } else {
                acc += curr - pre * 2;
            }
        }
        return acc;
    }
}