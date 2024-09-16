## 🎯 Getting Started

To get started with Promptly, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/VaibhavSingh87/Promptly.git
    ```

2. **Add .env file**:
   Create a file named .env in the Server folder and add the following:
    ```bash
    ACCESS_TOKEN_SECRET=""
    GEMINI_API_KEY="" //Add your API Key 
    ```
    
3. **Install Dependencies for the Frontend**:
    ```bash
    cd client
    npm install
    ```

4. **Install Dependencies for the Backend**:
    ```bash
    cd ../server
    npm install
    ```

5. **Run the Backend Server**:
    ```bash
    cd ../server
    nodemon ./server.js
    ```

6. **Run the Frontend Application**:
    ```bash
    cd ../client
    npm start
    ```

7. **Open Your Browser**:
    Navigate to `http://localhost:3000` to start using Prompty!

**To build the docker image of promptly**

1. **Change the MongoDB Link to**:
    ```bash
    "mongodb://mongo:27017/Promptly"
    ```

2. **Run the following docker command**:
    ```bash
    docker-compose up
    ```

## 🛠️ Technologies Used

- **Frontend**: React.js, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB



<h1>Features</h1>
<h2>Create Prompts</h2>
<ul>
  <li><strong>Easily Create, Share, and Edit AI Prompts:</strong> Design, share, and edit your own AI prompts with ease. Whether you’re addressing a specific task or sparking creativity, you can craft prompts to guide the AI in generating the desired output.</li>
      <li><strong>Describe the Task and Context:</strong> Use concise tags to describe the task, context, and any other relevant information. This ensures others quickly understand the purpose of your prompt and how to use it effectively.</li>
      <li><strong>Get AI Suggestions:</strong> While crafting your prompt, receive AI-generated suggestions to refine and optimize it. This feature helps you improve your prompt, ensuring it delivers the intended results.</li>
      <li><strong>Edit Prompt:</strong> If you need to make changes to a prompt after publishing it, you can easily edit it. This feature allows you to update or refine your prompt to keep it relevant and effective.</li>
</ul>
<h2>Discover Section</h2>
<ul>
 <li><strong>Explore a Wide Range of Prompts:</strong> The Discover section is a space to explore a variety of prompts created by the community. Access a rich library of prompts that cater to different needs and interests.</li>
      <li><strong>Browse Categories and Use Search Filters:</strong> Easily find relevant prompts by browsing through categories or using search filters. Whether you’re interested in creativity, productivity, or specific industries, this feature helps you quickly locate what you need.</li>
      <li><strong>Save Prompts to Your Collection:</strong> Save interesting or useful prompts to your personal collection for easy access later. This feature ensures you have your favorite prompts readily available when needed.</li>
</ul>

<h2>Profile</h2>
<ul>
 <li><strong>View Your Published Prompts:</strong> Your profile allows you to keep track of all the prompts you've published. Manage your contributions, monitor engagement, and make updates as necessary.</li>
      <li><strong>Access Your Saved Prompts:</strong> Quickly revisit the prompts you’ve saved from the Discover section. This feature provides easy access to the prompts you find particularly valuable.</li>
      <li><strong>Remove Unwanted Prompts:</strong> If there are prompts you no longer wish to share or keep in your saved collection, this feature allows you to remove them. Keep your profile content organized and relevant.</li>
</ul>


<h1>Preview</h1>
<h2>Register/Login</h2>
<img width="960" alt="Screenshot 2024-03-22 221022" src="https://github.com/VaibhavSingh87/Promptly/assets/114211427/380d7152-3a4c-49bc-a898-3da84b6043b2">
<h2>Discover Section</h2>
<img width="960" alt="Screenshot 2024-03-22 222237" src="https://github.com/VaibhavSingh87/Promptly/assets/114211427/48995d4a-a9f0-4eb7-b42e-2aa322ae700e">
<h2>Create Prompts</h2>
<img width="960" alt="Screenshot 2024-03-22 221154" src="https://github.com/VaibhavSingh87/Promptly/assets/114211427/abb1bfca-de6e-4ddf-8abb-6c5b42b6b903">
<h2>Profile</h2>
<img width="960" alt="Screenshot 2024-03-22 221555" src="https://github.com/VaibhavSingh87/Promptly/assets/114211427/747fbe15-4a6c-4d20-bed9-2ef6ad5cdb9a">

<h1>Metrics</h1>
<img width="960" src="https://github.com/user-attachments/assets/e156d082-e30b-4bb9-9b79-3b5e69ad2e93">

<h1>Observability</h1>
<p>For building your dashboard in grafana for the metrics scraped by the prometheus server, refer to the Observability.txt file</p>
<h2>Sample Dashboard</h2>
<img width="960" src="https://github.com/user-attachments/assets/724de803-fc30-407b-a64a-2aa71ca51ded">

## 🤝 Contributing
We welcome contributions from the community! Here's how you can help:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.

3. Make your changes.
4. Submit a pull request.

