
import React from 'react';
import styles from './TestimonialsSection.module.css';

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Júlio',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 2,
      name: 'Maria',
      rating: 4,
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
    {
      id: 3,
      name: 'Ronaldo',
      rating: 5,
      text: 'Sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // depoimentos conforme o Figma
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? styles.filledStar : styles.emptyStar}>
          ★
        </span>
      );
    }
    return <div className={styles.starRating}>{stars}</div>;
  };

  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.sectionTitle}>O que dizem sobre nós</h2> {/* Título opcional */}
      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            {renderStars(testimonial.rating)}
            <p className={styles.testimonialText}>"{testimonial.text}"</p>
            <p className={styles.testimonialAuthor}>- {testimonial.name}</p>
          </div>
        ))}
      </div>
      {/* setas de navegação aqui */}
    </section>
  );
}

export default TestimonialsSection;