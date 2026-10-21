const partnerLabels = {
  m: 'wife',
  f: 'husband',
};

const getPartnerText = ({ sex, isMarried, partnerName }) => {
  if (!isMarried) {
    return 'I am not married';
  }

  return `${partnerName} is my ${partnerLabels[sex]}`;
};

export const Person = ({ person }) => {
  const { name, age } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age > 0 && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">{getPartnerText(person)}</p>
    </section>
  );
};
