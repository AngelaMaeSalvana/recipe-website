import React from 'react';
import LandingNav from '../components/LandingNav'

const About = () => {
  return (
    <div>
        <LandingNav/>
    <section className="about-section" style={styles.container}>
        
      <h1 style={styles.heading}>Welcome to Dish Diaries!</h1>
      <p style={styles.paragraph}>
        At <strong>Dish Diaries</strong>, we believe that every meal has a story, and we’re here to help you document yours! 
        Whether you’re a seasoned home chef or just starting out in the kitchen, our platform is designed to inspire and guide 
        you through your culinary journey.
      </p>
      <p style={styles.paragraph}>
        Dish Diaries is more than just a recipe book – it’s a personal collection where you can explore, create, and share 
        your favorite recipes. With easy-to-follow instructions, customizable ingredient lists, and stunning food photography, 
        we make it simple for you to curate a variety of dishes from all around the world.
      </p>
      <h2 style={styles.subheading}>Our Goal</h2>
      <ul style={styles.list}>
        <li><strong style={styles.strong}>Discover New Recipes</strong>: From classic dishes to trendy new flavors from our community</li>
        <li><strong style={styles.strong}>Stay Organized</strong>: Save, categorize, and organize all your favorite recipes in one convenient place.</li>
        <li><strong style={styles.strong}>Create Your Own Cookbook</strong>: Add your personal twist to any dish and build your very own cookbook to share with friends and family.</li>
      </ul>
      <p style={styles.paragraph}>
        Whether you’re cooking for yourself or planning a gathering, Dish Diaries offers you the tools to keep track of your culinary 
        creations and explore new ones. Join us on this delicious adventure and make every meal memorable!
      </p>
    </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '97%',
    margin: '0 auto',
    color: '#333',
  },
  heading: {
    color: 'black',
    fontFamily: 'Halimun',
    fontSize: '1.8rem',
    marginBottom: '1rem',
  },
  subheading: {
    color: 'black',
    fontFamily: 'Halimun',
    fontSize: '1.5rem',
    marginTop: '2rem',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    marginBottom: '1rem',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: '1rem 0',
    fontSize: '1.2rem',
    lineHeight: '1.8',
  },
  strong:{
    color:'#f16c4f'
  }
};

export default About;
