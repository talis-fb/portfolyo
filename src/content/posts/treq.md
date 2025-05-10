---
title: TReq
published: 2025-02-16
description: A CLI tool for effortless HTTP requests
tags: [Rust, Backend]
category: Projects
preview_gh: https://github.com/talis-fb/TReq
---

TReq is a user-friendly Command Line Interface (CLI) HTTP client, designed to be simple and a complete CLI tool to interact with APIs. With options to save and edit frequently used requests with simple commands to run them again later. Imagine a workflow like GUI tools for HTTP requests in terminal.

![preview](https://camo.githubusercontent.com/a24c95d3fbfc5b1df4bbe109a53013ddca9a6bdd3660e3c99b6ef2cc8180d404/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f64666a6e39347667382f696d6167652f75706c6f61642f76313730383931303935382f545265712f64656d6f2d74726571325f6c6974655f6979716167362e676966)

This is my first Open Source project. And my big tried to created some helpful tools for me and hopefully for others. It was also the first and definitive project I used to learned Rust. 

Actually, this version is a full rewrite of my original attempt: [https://github.com/talis-fb/legacy_TReq](https://github.com/talis-fb/legacy_TReq). That first version had a lot of flaws due to my lack of experience, but I learned a ton from it. Eventually, I decided to take all those lessons and rebuild it from scratch, with a clearer vision and better code.

# 🎯 My goals and ideias...

It started with a simple problem I kept running into as a backend developer:

>
> I just want to re-run a saved API request without opening Postman or writing a giant curl command I’ve already forgotten.
> 

Sure, tools like curl or HTTPie are great for quick requests, but they don’t really help when:
1. You have a complex payload or tons of query params.
2. You just want to run something you’ve already saved—without reopening a big GUI app.

That’s when I thought: Why isn’t there a terminal tool that does this?

My really first and main ideia was focusing in creating a TUI application. Just like a lot of TUI application out there to replace GUI tools, like lazydocker, lazygit, htop, neovim, etc...
TReq should be a TUI tool to deal with HTTP requests.




# ❌ TUI First Attempt
My original vision was actually a full TUI (Text User Interface) app using ratatui.

And I did build it. It had screens, panes, keybindings... the whole package. 

![preview-first-attempt](https://camo.githubusercontent.com/a2e70cd09e11052044008a2e64d259d5dfa9ed130f6b22e3b429c246d0ad9e74/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f64666a6e39347667382f696d6167652f75706c6f61642f76313637373830363930352f545265712f73686f7763617365325f693170756e712e676966)

But eventually I hit a wall.

TUI apps are cool—but hard to get right. And no matter how much polish I added, it still didn’t feel better than just opening a GUI app. The TUI was getting in the way of productivity instead of helping it.

So, I scrapped it.

# ✅ The definitive version

This time, I focused purely on the command line. I wanted something you could use like:
```sh
treq run my-request
```
And that’s it. Clean, quick, repeatable.

TReq is inspired by HTTPie in terms of syntax and usability, but with a strong focus on persistency and interactive workflows. You can save a request once, and run it again anytime with full support for bodies, headers, auth, and more.

# TL;DR

Submit and saving the request locally as "main-endpoint" with `--save-as` flag

```sh
treq POST example.com name="John Doe" --save-as main-endpoint
```

Executing saved request with run command

```sh
treq run main-endpoint
```

Executing it adding more data

```sh
treq run main-endpoint email='john@gmail.com' job=dev
```

A pratical usage...
```sh
# Create a user and save the request for make it again later
treq POST api.com/user name=John job=dev friends:='["Bob", "Jane"]' birth-year:=1990 --save-as create-user

# Make the same request for create a user "Jane"
treq run create-user name=Jane birth-year:=2001

# Editing saved request
treq edit birth-year:=2002 --method PATCH
```
