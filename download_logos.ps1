$icons = @{
    "playwright" = "playwright";
    "pytest" = "pytest";
    "appium" = "appium";
    "python" = "python";
    "javascript" = "javascript";
    "html" = "html5";
    "css" = "css3";
    "postman" = "postman";
    "mongodb" = "mongodb";
    "redis" = "redis";
    "sql" = "microsoftsqlserver";
    "api" = "socketdotio"; 
    "jira" = "jira";
    "xray" = "jira"; 
    "asana" = "asana";
    "git" = "git";
    "sourcetree" = "sourcetree";
    "kibana" = "kibana";
    "snowflake" = "snowflake";
    "gemini" = "googlegemini";
    "chatgpt" = "openai";
    "windows" = "windows";
    "macos" = "apple";
    "ios" = "apple";
    "android" = "android";
    "idx" = "google"; 
    "trackjs" = "javascript"; 
}

$dest = "media/symbols/myStack"

foreach ($key in $icons.Keys) {
    $slug = $icons[$key]
    $url = "https://cdn.simpleicons.org/$slug"
    $output = "$dest\$key.svg" # Saving as SVG
    
    # Check if needs specific color handling for dark mode (e.g. Apple/GitHub usually black)
    if ($slug -eq "apple" -or $slug -eq "socketdotio") {
        $url = "https://cdn.simpleicons.org/$slug/white"
    }

    try {
        Invoke-WebRequest -Uri $url -OutFile $output -ErrorAction Stop
        Write-Host "Downloaded $key from $slug"
    } catch {
        Write-Host "Failed to download $key from $slug"
    }
}
