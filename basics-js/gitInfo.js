/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

const gitDefinition = 'A tool that allows file and folder tracking within a project or repository'

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

const gitHubDefinition = "Github is a place where developers, or companies store their repositories, allowing collaboration, organization and a place that code won't get lost. One can have both public or private repositories"

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

const gitInitDefinition = 'Adding a .git file to a directory, in order to make that directory a git tracked folder that can later be pushed into github etc. Having a git tracked directory helps with less mistakes and also being able to revert to some place that your code was clean in case you messed up'


//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

const gitCloneDefinition = 'When a respository is created on Github or other platforms such as BitBucket or Gitlab, they get assigned some links or ways for users to clone that code in otheir local machines, they can do that with the git clone command followed by the link of the respository'

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

const gitStatusDefinition = 'When typed in the terminal, this command shows the status of changes that a user has made since the last push or commit, in order to know where changes have been made'

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

const gitAddDefinition = 'This will track and target the changed files, and make them ready for a commit, basically taking a snapshot of latest code situation'

const gitAddCode = 'git add . or git add -A'

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

const gitCommitDefinition = 'This step comes right after the git add method, in order to allow the user to commit the code, followed along by a message in order to know what has been done until this moment of the code'

const gitCommitCode = 'git commit -m "message'

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

const gitPushDefinition = "This is the last step in the git workflow of a project for each commit, after all code is grabbed, a commmit message is written, then the code can be push to the targetet branch within the cloud of where the project is stored, 'Github, Gitlab, Bitbucket, etc.' "