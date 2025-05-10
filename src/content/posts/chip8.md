---
title: Chip-8 Emulator
published: 2025-02-16
description: A dive into emulators world
tags: [Golang, Low-level, WebAssembly]
category: Projects
preview_gh: https://github.com/talis-fb/chip8-emulator
preview_url: https://chip8.talison.dev/
---

# A Little Backstory…
This was one of those _“I wanna understand how this thing really works”_ kind of projects.

It all started with a curiosity about how CPUs actually do their thing—opcodes, memory registers, bit operations, stack calls… the whole low-level dance. At the same time, I wanted to do something fun! 

Then, why not a video-game like project? Emulators seemed like the perfect playground to explore all that. 
My first idea was to write a NES emulator. It’s a pretty popular choice—challenging but not completely overkill. But the more I thought about it, the more I felt like I didn’t want to spend months fine-tuning every little quirk of NES hardware just to end up with another “look at my NES emulator” like the other 34,131 out there 😅.

That’s when I remembered CHIP-8.

CHIP-8 is kind of the "Hello World" of emulators. It’s simple enough to build solo, but tricky enough to teach you a lot. It has its own tiny instruction set and virtual architecture—perfect for digging into how an emulator/system really works.

# What I used?

I picked **Go** for this one, even though I already know **Rust** pretty well. Why? I wanted to challenge myself.
Rust is my comfort zone when it comes to systems programming, but Go is something I’ve been exploring more recently. I figured this was a great chance to push myself and build something non-trivial with it.

For the UI, I wanted to go with the classic web trinity: *HTML, CSS, and JavaScript*. But I also didn’t want to deal with a bloated frontend framework. I just needed something simple and clean that could interact with WebAssembly. And most important, I wasn’t about to give up TypeScript.

That’s where Vite came in. It made working with `TS + WASM + Tailwind` super smooth—just enough structure to keep things organized, but still light and fast.
