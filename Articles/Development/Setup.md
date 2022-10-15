
# Development Setup

*How to get your system set up for development.*

<br>

## Dependencies

<br>

-   **[Deno]**

-   **[Git]**

<br>
<br>

## Setup

<br>

1.  Create a folder for the project files.

    *Example: `/home/<User>/Documents/Nekyo-Development/`*

    <br>
    
2.  Open a terminal in your newly created folder.

    <br>

2.  Run the setup script by copying the <br>
    following command into your terminal.

    ```sh
    deno run                    \
        --allow-net=github.com  \
        --allow-run=git         \
        --allow-write=.         \
        --allow-read=.          \
        https://raw.githubusercontent.com/LewdTechnologies/Nekyo/Tools/Source/Setup/App.js
    ```
    
    *This will clone all project repositories.*

<br>


<!----------------------------------------------------------------------------->

[Deno]: https://deno.land/
[Git]: https://git-scm.com/
