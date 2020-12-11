let bbird = `

# Bird Opening

f4 d4 e3

delay Nc3 don't rush Ne4

`;

let bfrenchknight = `
# French Defense, Knight Variation

 <1. e4 e6 2. Nf3 d5 3. exd5 exd5 4. Nc3 Nf6 5. d4 Be7 6. Be2 O-O 7. O-O>

=13

 ok <7... Nbd7 8. Bf4 c6 9. h3 Ne4> 

 bad for white <mainb1 main 9. Bd3 Nh5 10. Be3 Bd6>

 c5 because queen block <mainc5 main 6. Bd3 O-O 7. O-O c5>

 with c4 idea <mainc5b mainc5 8. Bg5 c4>

 main <mainc5a mainc5 8. dxc5 Bxc5> a3 a6, with Nd7-Nb6 and Be6


# Quick Notes

 Be2 Nbd7 c6

 Bd3 c5 c4
`;

let bfrenchrubinstein = `

# French Defense, Rubinstein Variation

<1. Nf3 e6 2. e4 d5 3. Nc3 dxe4 4. Nxe4 Nd7 5. d4 Nf6 6. Bd3 Be7 7. O-O O-O 8. Re1 b6>


<9. c3 Bb7 10. Qe2 c5 11. Bf4>

=21

<11... cxd4 12. Nxf6 Bxf6 13. cxd4 Be7> to play Nf6


Early Nxf6

<Nxf6 main 9. Nxf6 Nxf6 10. O-O Bb7 11. Rad1 Nh5 12. Be5 Bd6> followed by f6 to exchange

`;

let bfrenchrblackburne = `

# French Defense, Rubinstein Variation, Blackburne Defense

 <1. e4 e6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nd7 5. Nf3 Nf6 6. Bg5 Be7> 

=12

# Qe2, prep b6 with Rfd8

 <7. Nxf6 Nxf6 8. Bd3 O-O 9. Qe2 c5 10. dxc5 h6>

=20

Qd5 or Qa5+ for Qxc5 Qh5, Rfd8 Bd7


# OLD Stuff


 <main2 main 7. Bxf6 Nxf6 8. Bd3 O-O 9. O-O b6>

 bad for black <main2b1 main2 9... Nd5 10. Re1 Nf4 11. Bf1>

 good for black <main2g1 main2 9. c3 Nd5 10. O-O b6 11. c4 Nf4 12. Bc2 Bb7>


 alternative <maina main 5. c3 Nf6 6. Bd3 Be7 7. Nf3 O-O 8. O-O b6 9. Qe2 Bb7>

 blunder for white <maina2 maina 10. Bg5 Bxe4 11. Bxe4 Nxe4 12. Bxe7 Nxc3 13. bxc3 Qxe7>

 quick queen side <mainq main 6. Bd3 Be7 7. Be3 O-O 8. Qd2 b6 9. O-O-O Bb7 10. Nxf6+ Nxf6 11. h4>

 preferred <mainq2 mainq 11... Bxf3 12. gxf3 Qd5 13. Kb1 Qxf3 14. Rhg1 Rfd8 15. Rg3 Qd5>

`;

let bfrenchexchange = `

# French Defense, Exchange Variation

<1. e4 e6 2. d4 d5 3. exd5 exd5 4. Nf3 Nf6>

=8

# delayed queen side

<5. Bd3 Be7 6. O-O O-O 7. Re1>

<c3dxc5 main 7... c5 8. c3 Nc6 9. dxc5 Bxc5 10. Bf4 Bg4> follow up by Qb6

dxc5

<dxc5 main 7... c5 8. dxc5 Bxc5 9. Be3 Bxe3> follow up by Qb6

# Be2

<Be2 main 5. Be2 Be7 6. O-O O-O 7. c3 c6 8. h3 Nbd7 9. Be3 Bd6 10. Nbd2 Ne4>

`;

let wqpg = `

# Queen's Pawn Game

<1. d4 d5 2. e3 c5 3. Nf3>

# Early cxd4 Bg4

<cxd4 main 3... cxd4 4. exd4 Nf6 5. Be2 Bg4 6. O-O Nc6>

=12 cxd4

<7. h3 Bh5 8. Bf4> 
Black gets into trouble if queen goes after b pawn.

# Main line

<3... Bg4 4. Be2 Nc6 5. O-O Nf6 6. c4>

=11

main <6... cxd4 7. cxd5 Nxd5 8. h3 Bxf3 9. Bxf3 e6 10. exd4 Bb4 11. Nc3 Nxc3 12. bxc3 Bxc3 13. Rb1 O-O 14. Ba3 Re8 15. d5>

# c6 e6 f5 pawns on light squares

<c6e6f5 main 2... c6 3. Nf3 e6 4. Be2 f5 5. O-O Nf6 6. b3 Ne4 7. Bb2 Nd7 8. c4 Bd6 9. Ne5 O-O 10. f3>

=19 c6e6f5

Ideas, c5 with Qc1 Bd4


`;

let wcolle = `

# Colle System

  <1. d4 d5 2. e3 Nf6 3. Nf3>

# Early c5

<mainc5 main 3... c5 4. Be2>

Bg4 delayed c4 dxc4 Na3

<maindc4 mainc5 4... Nc6 5. O-O Bg4 6. h3 Bh5 7. c4 dxc4 8. Na3 cxd4 9. exd4 e6 10. Nxc4 Be7 11. Nce5> 

Early cxd4 Forced exd4 because e5 threat

  <mainfe4 mainc5 4... cxd4 5. exd4 Nc6 6. O-O e6>

Bad bishop exchange and c3 Nbd2

  <mainfe4 mainc5 7. Bf4 Be7 8. c3 O-O 9. Nbd2 Ne4> Bd3 Re1 Qe2 h3 a4 ideas


=10 mainfe4

Early c5, c4 then Nxd4

  <maina mainc5 4... Nc6 5. O-O e6 6. c4 cxd4 7. Nxd4>

=13 maina

  <maina4 maina 7... Be7> +/= <maina4 maina 8. cxd5 exd5> b3 Bb2 and challenge Ne4 with Nd2 otherwise Nc3

  <maina2 maina 7... Bc5> +/= <maina2 maina 8. cxd5 exd5 9. Nxc6 bxc6 10. Qc2 Qd6 11. b3 O-O 12. Bb2 Bd7 13. Rc1 Bb4 14. a3>

  <maina3 maina 7... Bd6> = <maina3 maina 8. b3 O-O 9. Bb2 Bd7 10. cxd5 Nxd5 11. Nf3 Qe7 12. a3 a5 13. Nbd2>

=25 maina3

Early c5 c4 then dxc4

  <c5dxc4 mainc5 4... Nc6 5. O-O e6 6. c4 dxc4 7. dxc5>

=13 c5dxc4


# No c5

<noc5 main 3... Nc6 4. Be2 e6 5. O-O Bd6 6. c4 O-O 7. Nbd2>

=13 noc5

# No c5 Bb7

<noc5Bb7 noc5 7... b6 8. a3 a5 9. Qc2> b3 c5, also consider e4

# No c5 early Ne4

<noc5Ne4 noc5 7... Ne4 8. a3 f5 9. Qc2 a5 10. b3 Qe8>


# Fianchetto

<fianchetto main 1. d4 d5 2. e3 Nf6 3. Nf3 g6 4. Be2 Bg7 5. O-O O-O>

=10 fianchetto

a4 dxc5 Nbd2 Nb3 Nfd4 f3

`;

let wanticolle = `

# Queen's Pawn Game, Colle System, Anti Colle

<1. d4 Nf6 2. e3 d5 3. Nf3 Bf5 4. Be2 e6 5. O-O>

=9

If takes on c4 early try to take with either knight

# h6 c6

<mainh6 main 5... h6 6. c4 c6 7. Bd3>

If takes on c4 (Re1 or Qe2) and e4 e5 or d5 push in the center even gxf3.

# no h6, c6 Bg4 h3

<Bg4h3 main 3... c6 4. Be2 Bg4 5. O-O e6 6. h3 Bf5 7. c4>

=13 Bg4h3

<Bg4h3 main 7... Be7 8. Nc3 Nbd7 9. Nh4 Bg6 10. a3>

Ideas Bxg6 b3 Bb2 Qd3 Bf3 e4

# no h6, Reverse London

<mainlondon main 5... Bd6 6. c4 c6 7. Nh4>

Keep the knight on h4 with g3 and use f4

=13 mainlondon


# h5 h4 hack attack

<hackh4 main 5... h5 6. c4 h4 7. h3 c6>

=14 hackh4

Pile up on e4 and resolve.

`;


let bqgd = `

# Queen's Gambit Declined

 <1. d4 e6 2. Nf3 d5 3. c4 Nf6 4. Nc3 Be7 5. Bg5 O-O 6. e3>

=11

 <maina main 6... Nbd7 7. Rc1 h6 8. Bh4 c6>

 cxd5 is met by exd5 to keep the c3 knight restricted.

 <maina main 9. Qc2 a6> now cxd5 can be met by cxd5.

 a4 is met by b5 sacing a pawn exchanging and draw

# Delayed Ne4

 <mainde4 maina 9... Ne4 10. Bxe7 Qxe7 11. Be2 Nxc3 12. Qxc3 dxc4 13. Qxc4 e5 14. O-O e4>

=28 mainde4

`;

let bqgdharwitz = `

# Queen's Gambit Declined Harrwitz Attack, Main Line

<1. d4 e6 2. c4 d5 3. Nf3 Nf6 4. Nc3 Be7 5. Bf4 O-O 6. e3>

=11

<6... Nbd7>

`;

let bqgdobotvinik = `

# Queen's Gambit Declined, Orthodox Defense, Botvinik Variation

<1. d4 e6 2. c4 d5 3. Nc3 Nf6 4. Nf3 Be7 5. Bg5 O-O 6. e3 h6 7. Bxf6 Bxf6 8. Rc1 dxc4 9. Bxc4 c5 10. Ne4 b6>

=20

c6 <mainc6 main 8. cxd5 exd5 9. Bd3 c6 10. O-O Bg4>

b6 <mainb6 main 7. Bh4 b6 8. Bd3 Bb7 9. O-O dxc4 10. Bxc4 Nbd7 11. Qe2 Nd5>

`;

let bqgdexchange = `

# Queen's Gambit Declined Exchange Variation, Positional Variation

<1. c4 e6 2. Nc3 d5 3. cxd5 exd5 4. d4 Nf6 5. Bg5 Be7 6. e3 O-O 7. Bd3>

=13

<7... h6 8. Bh4 c6 9. Nge2 Ne4>

<main2 main 9. Qc2 

`;

let windian = `

# Indian Game

<1. d4 Nf6 2. e3 g6 3. Nf3 Bg7 4. Be2 O-O 5. O-O 

# c5

<c5 main 5... c5 6. c4 cxd4 7. Nxd4> e5 is met by Nb5

=13 c5

<c5 main 7... d5 8. cxd5 Nxd5 9. Qb3 e5 10. Nf3 e4 11. Rd1>

# d5

<5... d5 6. c4 c5>

=12

ok <7. Nc3 dxc4 8. Bxc4 cxd4 9. exd4 Qc7 10. Bb3 Nc6 11. Re1 Bg4 12. Be3>

`;

let wyusupov = `

# Yusupov-Rubinstein System

<1. d4 e6 2. e3 Nf6 3. Nf3 c5 4. Be2>

# d5

<d5 main 4... d5 5. O-O Be7 6. c4 O-O 7. Nc3>

=13 d5

Exchange the center,
If isolated pawn, a3 (to avoid Na5) and d5



# Early exchange

<cxd4 main 4... cxd4 5. exd4 d5 6. O-O Bd6 7. c3 O-O>

=14 cxd4

<cxd4 main 8. Bd3 Nc6 9. Re1 h6 10. h3 Qc7 11. Qe2 b6 12. Ne5>


`;

let wideas = `

# Trash Opening

When they play the f pawn early, look for early attacks, e4 Qb3 b pawn Nh5

# Dominating Queen Side

When you have a comfortable position on the queen side, and black is defending well, switch to king side, and the center.

`;

let content = bfrenchexchange;

export default content;
