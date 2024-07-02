import {
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { NewServiceForm } from "./NewServiceForm";

export function NewServiceDialog() {
	return (
		<DialogHeader>
			<DialogTitle>Add new service</DialogTitle>
			<DialogDescription>
				Fill in the form below to add a new service
			</DialogDescription>
			<NewServiceForm />
		</DialogHeader>
	);
}
