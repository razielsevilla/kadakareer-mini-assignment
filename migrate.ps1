$content = Get-Content prototype.html -Raw
$regex = '(?s)function App\(\) \{.*?(?=const root = ReactDOM)'
if ($content -match $regex) {
    $appCode = $matches[0]
    $newAppJsx = "import { useState } from 'react';`nimport { INITIAL_USER_PROFILE, MOCK_JOBS } from './data/mockData';`n`nexport default $appCode"
    Set-Content -Path "src\App.jsx" -Value $newAppJsx
} else {
    Write-Output "App function not found in prototype.html"
}
