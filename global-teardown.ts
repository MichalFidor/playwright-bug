async function globalTeardown(config): Promise<void> {
    console.log(`Testing flow in globalTearDown ${process.env.TESTING_ENV_FLOW}`);
    console.log(config)
}

export default globalTeardown;
