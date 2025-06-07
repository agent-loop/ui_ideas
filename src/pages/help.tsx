const HelpSupport = () => {
  return (
    <PageBackground>
      <ContentWrapper>
        <PageContainer>
          <Title>Help & Support</Title>
          
          <Section>
            <Text>
              Need assistance? We're here to help! Check out our resources below or contact our support team.
            </Text>
          </Section>

          <Grid>
            <div>
              <SupportCard>
                <SubTitle>FAQs</SubTitle>
                <List>
                  <ListItem>How do I reset my password?</ListItem>
                  <ListItem>Can I change my username?</ListItem>
                  <ListItem>How do I report inappropriate content?</ListItem>
                  <ListItem>What are the chat room limits?</ListItem>
                  <ListItem>How do I manage notifications?</ListItem>
                </List>
              </SupportCard>
            </div>

            <div>
              <SupportCard>
                <SubTitle>Contact Support</SubTitle>
                <Text>
                  Our support team is available:
                  <br />
                  Monday - Friday
                  <br />
                  9:00 AM - 6:00 PM IST
                </Text>
                <ContactInfo>
                  <div>Email: support@gingr.chat</div>
                  <div>Response Time: Within 24 hours</div>
                </ContactInfo>
              </SupportCard>
            </div>
          </Grid>

          <Section>
            <SmallText style={{ textAlign: 'center' }}>
              For technical emergencies outside business hours,
              <br />
              please email urgent@gingr.chat
            </SmallText>
          </Section>
        </PageContainer>
      </ContentWrapper>
    </PageBackground>
  );
}; 