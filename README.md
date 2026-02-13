# Superkocky
A web app serving as a school project for the MIT subject, designed for rating pictures of cats sourced from a database.
Ratings are saved and then used to generate a leaderboard of the highest-rated images as needed.
## Technologies Used
- SvelteKit Framework
- Tailwind CSS
- Typescript
- Supabase Serverless Nano Instance
    - S3 Bucket
    - SQL Database
- Lucide Icons
## Project Structure
### Backend
#### /api
- Path for the backend that communicates with the database
- `/leaderboard` - fetching images with the highest rating from the database
- `/rating` - submitting ratings to the database via RPC actions configured on the Supabase side
#### /img
- `/[filename]` - Dynamic path for fetching specific images from the database
- `/random` - Path that fetches a random image from the database
### Frontend
#### /static
- Logo used for the project
- `robots.txt` - configured to block AI crawlers
#### /leaderboard
- Page for rendering content fetched from the API
#### /random
- Main rating page, renders data returned from the API, allows users to submit ratings
- After submitting a rating, new data is fetched and the user can rate another image
#### +layout.svelte
- Layout containing a header and footer, dynamically generated from a constant
## Flow
1. The user is on the main page and uses buttons to choose whether they want to see the leaderboard or rate images
    1. The "Prozkoumat" button redirects the user to /leaderboard, where generation is handled independently
    2. The highlighted "Hodnotit" button redirects the user to the /random page where they can continue rating images
2. On the /random page, an image is generated for the user with three options — "downvote", "skip", and "upvote"
    1. Based on the user's rating, the vote is sent to the /api endpoint and written to the database
3. After rating, a new image is generated and the process repeats.
