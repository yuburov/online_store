import { NextPage } from "next";
import React from "react";
import Meta from '../components/ui/Meta';
import Layout from '../components/ui/layout/Layout';
import Heading from '../components/ui/Heading';
import Button from "@/ui/button/Button";
import Link from "next/link";

const ThanksPage: NextPage = () => {
  return (
    <Meta title="Thanks">
      <Layout>
        <div className="text-center mt-48">
          <Heading >Thank you for your purchase! </Heading>
          <Link href='/my-orders'>
            <Button variant="orange" size="lg"> Visit your orders page</Button>
          </Link>
          <Link href='/'>
            <Button className="ml-3" variant="secondary" size="lg"> Go to the main page</Button>
          </Link>
        </div>
        
      </Layout>
    </Meta>
  );
};

export default ThanksPage;
