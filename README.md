# Client Data Fetching in Gatsby

There are three main ways to get data into a Gatsby site.

## 1. At _build time_ using the Gatsby data layer.

Learn more about using the Gatsby data layer in the [docs](https://www.gatsbyjs.org/docs/graphql/) and [main tutorial](https://www.gatsbyjs.org/tutorial/part-four/).

## 2. At _build time_ outside of the data layer, using unstructured data.

Learn more about using [unstructured data](https://www.gatsbyjs.org/docs/using-unstructured-data/) in Gatsby.

## 3. At _run time_ fetching from the client.

This will be what our example focuses on. In the context of Gatsby, this is specifically referring to data requested at run time, independent of the Gatsby data layer.

Gatsby sites are React apps. React apps are dynamic. Therefore, Gatsby is dynamic. You can pick and choose from these methods to find a balance that works for you. (Note: When considering, it's worth being aware of the [tradeoffs of foregoing the Gatsby data layer](https://www.gatsbyjs.org/docs/using-unstructured-data/#the-tradeoffs-of-foregoing-gatsbys-data-layer)).
