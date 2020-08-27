# Join

This is a tool built with the intent to provide permanent links for Node.js project meetings, no matter what the _real_ join links are.

## How it Works

This project works like this:

- Meetings are added to `./template/meetings.json`. All properties are required: `name`, `filename`, and `link`.
  - Name is the group name.
  - Filename is the name of the slug for any given meeting.
  - Link is the link that end-users will be redirected to.
- The builder (`index.js`) should be run, either directly with `node index.js` or with `npm run build`.
- Once run, the builder will spit out pages based off of the `./template/meetings.json` file and the `./template/template.html` file, consistently replacing the necessary information for each entry.
- These pages can/should be deployed to a place where they can be accessed online.
  - GitHub Pages is the simplest solution, since the repository settings for Pages can be pointed to the `./docs` directory and a nice and clean URL will be provided or can easily be `CNAME`ed.

## Adding and Updating Meetings

### Adding Meetings

To add a meeting, you'll need to submit a PR adding a section to the `entries` property of `./template/meetings.json`. Here's the raw property you'll need to add:

```json
    {
      "name": "group name here",
      "filename": "url-friendly-version-of-group-name-or-abbreviation-here",
      "link": "meeting url here"
    }
```

A finished example:

```json
    {
      "name": "TSC",
      "filename": "tsc",
      "link": "https://zoom.us/j/611357642"
    }
```

### Updating Meetings

To update an existing meeting, please feel free to submit a PR to any of the entries. Including a reference to where/why you're updating it would be ideal so the maintainers of the repo can merge swiftly without needing to ask for additional context.

## Credit

This tooling was 100% inspired by David Guttman ([@davidguttman](https://github.com/davidguttman)) and the tool he built that does this for the [Node.js Mentorship Initiative](https://github.com/davidguttman/mentorship/blob/gh-pages/meeting/index.html).