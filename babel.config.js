module.exports = {
	presets: ["module:@react-native/babel-preset"],
	plugins: [
		["module:react-native-dotenv"],
		[
			"module-resolver",
			{
				root: ["./src"],
				extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
				alias: {
					"@services": "./src/services",
					"@constants": "./src/common/constants",
					"@stores": "./src/common/stores",
					"@enums": "./src/common/enums",
					"@interfaces": "./src/common/interfaces",
					"@exceptions": "./src/common/exceptions",
					"@utils": "./src/common/utils",
					"@schemas": "./src/common/schemas",
					"@hooks": "./src/common/hooks",
					"@components": "./src/components",
					"@screens": "./src/screens",
					"@assets": "./src/assets",
					"@userStack": "./src/routes/user/*",
					"@authStack": "./src/routes/auth/*",
					"@adminStack": "./src/routes/admin/*",
					"@colors": "./src/theme/colors.ts",
				},
			},
		],
		["react-native-reanimated/plugin"],
	],
};
